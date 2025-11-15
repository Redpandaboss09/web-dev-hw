"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    Row, Col, Button, FormGroup, FormLabel, FormControl,
    FormSelect, FormCheck
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment, type Assignment } from "../reducer";

const toLocalInput = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
};

const fromLocalInput = (val: string | undefined) => {
    if (!val) return undefined;
    const d = new Date(val);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString();
};

export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid: string }>();
    const router = useRouter();
    const dispatch = useDispatch();
    const { assignments } = useSelector((s: RootState) => s.assignmentReducer);

    const isCreate = String(aid) === "new";
    const existing = useMemo(
        () => assignments.find((x) => String(x._id) === String(aid) && String(x.course) === String(cid)),
        [assignments, cid, aid]
    );

    const [title, setTitle] = useState(existing?.title ?? "Untitled Assignment");
    const [description, setDescription] = useState(existing?.description ?? "");
    const [points, setPoints] = useState<number>(existing?.points ?? 100);
    const [due, setDue] = useState<string>(toLocalInput(existing?.dueISO) || "");
    const [availableFrom, setAvailableFrom] = useState<string>(toLocalInput(existing?.availableFromISO) || "");
    const [availableUntil, setAvailableUntil] = useState<string>(toLocalInput(existing?.availableUntilISO) || "");
    useEffect(() => {
    }, [title]);

    const onCancel = () => {
        router.push(`/Courses/${encodeURIComponent(String(cid))}/Assignments`);
    };

    const onSave = async () => {
        const payload: Assignment = {
            _id: existing?._id ?? "",
            title: title.trim() || "Untitled Assignment",
            course: String(cid),
            description,
            points: Number(points) || 0,
            dueISO: fromLocalInput(due),
            availableFromISO: fromLocalInput(availableFrom),
            availableUntilISO: fromLocalInput(availableUntil),
        };

        if (isCreate) {
            const newAssignment = await client.createAssignmentForCourse(String(cid), payload);
            dispatch(addAssignment(newAssignment));
        } else {
            const updated = await client.updateAssignment(payload);
            dispatch(updateAssignment(updated));
        }

        router.push(`/Courses/${encodeURIComponent(String(cid))}/Assignments`);
    };


    const heading = title?.trim() || "Untitled Assignment";

    return (
        <div id="wd-assignments-editor" className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-danger m-0">{heading}</h3>
                <Link href={`/Courses/${encodeURIComponent(String(cid))}/Assignments`}>
                    <Button variant="outline-secondary" size="sm">Back to Assignments</Button>
                </Link>
            </div>

            <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Assignment title"
                />
            </FormGroup>

            <FormGroup className="mb-4" controlId="wd-description">
                <FormControl
                    as="textarea"
                    rows={8}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Instructions and details for this assignment..."
                />
            </FormGroup>

            <Row className="align-items-center mb-3">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel>
                </Col>
                <Col sm={8}>
                    <FormControl
                        id="wd-points"
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        style={{ maxWidth: 240 }}
                    />
                </Col>
            </Row>

            <Row className="align-items-center mb-3">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-group" className="mb-0">Assignment Group</FormLabel>
                </Col>
                <Col sm={8}>
                    <FormSelect id="wd-group" style={{ maxWidth: 280 }}>
                        <option>ASSIGNMENTS</option>
                    </FormSelect>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</FormLabel>
                </Col>
                <Col sm={8}>
                    <FormSelect id="wd-display-grade-as" style={{ maxWidth: 280 }}>
                        <option>Percentage</option>
                        <option>Points</option>
                    </FormSelect>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-submission-type" className="mb-0">Submission Type</FormLabel>
                </Col>
                <Col sm={8}>
                    <div className="border rounded p-3" style={{ maxWidth: 520 }}>
                        <FormSelect id="wd-submission-type" defaultValue="Online" className="mb-3">
                            <option>Online</option>
                            <option>Paper</option>
                            <option>No Submission</option>
                        </FormSelect>

                        <div className="fw-semibold mb-2">Online Entry Options</div>
                        <FormCheck id="wd-text-entry" type="checkbox" name="wd-online-type" label="Text Entry" className="mb-2" />
                        <FormCheck id="wd-website-url" type="checkbox" name="wd-online-type" label="Website URL" defaultChecked className="mb-2" />
                        <FormCheck id="wd-media-recordings" type="checkbox" name="wd-online-type" label="Media Recordings" className="mb-2" />
                        <FormCheck id="wd-student-annotations" type="checkbox" name="wd-online-type" label="Student Annotation" className="mb-2" />
                        <FormCheck id="wd-file-upload" type="checkbox" name="wd-online-type" label="File Uploads" />
                    </div>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col sm={4} className="text-sm-end">
                    <FormLabel className="mb-0" htmlFor="wd-assign-to">Assign</FormLabel>
                </Col>
                <Col sm={8}>
                    <div className="border rounded p-3" style={{ maxWidth: 520 }}>
                        <FormGroup className="mb-3" controlId="wd-assign-to">
                            <FormLabel className="d-block">Assign to</FormLabel>
                            <FormControl defaultValue="Everyone" />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="wd-due-date">
                            <FormLabel className="d-block">Due</FormLabel>
                            <FormControl
                                type="datetime-local"
                                value={due}
                                onChange={(e) => setDue(e.target.value)}
                                style={{ maxWidth: 320 }}
                            />
                        </FormGroup>

                        <Row className="g-3">
                            <Col>
                                <FormGroup controlId="wd-available-from">
                                    <FormLabel className="d-block">Available from</FormLabel>
                                    <FormControl
                                        type="datetime-local"
                                        value={availableFrom}
                                        onChange={(e) => setAvailableFrom(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="wd-available-until">
                                    <FormLabel className="d-block">Until</FormLabel>
                                    <FormControl
                                        type="datetime-local"
                                        value={availableUntil}
                                        onChange={(e) => setAvailableUntil(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <hr className="my-4" />

            <div className="d-flex justify-content-end gap-2 mb-3">
                <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button type="button" variant="danger" onClick={onSave}>Save</Button>
            </div>
        </div>
    );
}
