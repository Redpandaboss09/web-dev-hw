'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    Row,
    Col,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    FormCheck,
    Alert,
} from 'react-bootstrap';

import { assignments } from '../../../../Database';

type Assignment = {
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueISO?: string;
    availableFromISO?: string;
};

export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid: string }>();

    const a = useMemo(() => {
        return (assignments as Assignment[]).find(
            (x) => String(x._id) === String(aid) && String(x.course) === String(cid)
        );
    }, [cid, aid]);

    const toLocalInput = (iso?: string) => {
        if (!iso) return '';
        const d = new Date(iso);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
    };

    if (!a) {
        return (
            <div id="wd-assignments-editor" className="container-fluid">
                <Alert variant="warning" className="mb-3">
                    Assignment not found for course <b>{cid}</b> and id <b>{aid}</b>.
                </Alert>
                <Link href={`/Courses/${encodeURIComponent(String(cid))}/Assignments`}>
                    <Button variant="secondary">Back to Assignments</Button>
                </Link>
            </div>
        );
    }

    const defaultName = a.title ?? 'Untitled Assignment';
    const defaultDesc =
        a.description ??
        `Provide your submission link or files here. Include any instructions relevant to this assignment.`;
    const defaultPoints = a.points ?? 100;
    const defaultDue = toLocalInput(a.dueISO) || '2025-05-13T23:59';
    const defaultAvailableFrom = toLocalInput(a.availableFromISO) || '2025-05-06T00:00';

    return (
        <div id="wd-assignments-editor" className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-danger m-0">{defaultName}</h3>
                <Link href={`/Courses/${encodeURIComponent(String(cid))}/Assignments`}>
                    <Button variant="outline-secondary" size="sm">Back to Assignments</Button>
                </Link>
            </div>

            <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl defaultValue={defaultName} />
            </FormGroup>

            <FormGroup className="mb-4" controlId="wd-description">
                <FormControl as="textarea" rows={8} defaultValue={defaultDesc} />
            </FormGroup>

            <Row className="align-items-center mb-3">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel>
                </Col>
                <Col sm={8}>
                    <FormControl id="wd-points" type="number" defaultValue={defaultPoints} style={{ maxWidth: 240 }} />
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
                            <FormControl type="datetime-local" defaultValue={defaultDue} style={{ maxWidth: 320 }} />
                        </FormGroup>

                        <Row className="g-3">
                            <Col>
                                <FormGroup controlId="wd-available-from">
                                    <FormLabel className="d-block">Available from</FormLabel>
                                    <FormControl type="datetime-local" defaultValue={defaultAvailableFrom} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="wd-available-until">
                                    <FormLabel className="d-block">Until</FormLabel>
                                    <FormControl type="datetime-local" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <hr className="my-4" />

            <div className="d-flex justify-content-end gap-2 mb-3">
                <Button type="button" variant="secondary">Cancel</Button>
                <Button type="submit" variant="danger">Save</Button>
            </div>
        </div>
    );
}
