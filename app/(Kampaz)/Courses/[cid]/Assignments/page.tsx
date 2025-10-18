"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Row, Col, Card, ListGroup, Button, Form, Badge, ListGroupItem } from "react-bootstrap";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import { assignments } from "../../../Database";

type Assignment = {
    _id: string;
    title: string;
    course: string;
};

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const encodedCid = encodeURIComponent(String(cid));

    const courseAssignments = (assignments as Assignment[]).filter(
        (a) => String(a.course) === String(cid)
    );

    return (
        <div id="wd-assignments" className="container-fluid">
            <Row className="g-4">
                <Col lg={8} xl={9}>
                    <div className="d-flex align-items-center gap-2">
                        <Form.Control id="wd-search-assignment" placeholder="Search" className="flex-grow-1" />
                        <Button id="wd-add-assignment-group" variant="secondary">+ Group</Button>
                        <Button id="wd-add-assignment" variant="danger">+ Assignment</Button>
                    </div>

                    <Card className="mt-3">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <RxDragHandleDots2 className="text-muted" />
                                <h3 id="wd-assignments-title" className="m-0 fs-5">ASSIGNMENTS</h3>
                                <Badge bg="light" text="dark" className="ms-1">40% of Total</Badge>
                            </div>
                            <div className="d-flex align-items-center">
                                <Button size="sm" variant="light" className="me-2">+</Button>
                                <BsThreeDotsVertical className="text-muted" />
                            </div>
                        </Card.Header>

                        <ListGroup id="wd-assignment-list" variant="flush">
                            {courseAssignments.map((a) => {
                                const href = `/Courses/${encodedCid}/Assignments/${encodeURIComponent(a._id)}`;
                                return (
                                    <ListGroupItem as="li" key={a._id} className="wd-assignment-list-item py-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-start gap-3">
                                                <RxDragHandleDots2 className="text-muted mt-1" />
                                                <FaFileAlt className="mt-1" />
                                                <div>
                                                    <Link
                                                        href={href}
                                                        className="wd-assignment-link fw-semibold text-decoration-none"
                                                        id={`wd-assignment-${a._id}-link`}
                                                    >
                                                        {a.title}
                                                    </Link>
                                                    <div className="small text-muted mt-1">
                                                        Multiple Modules
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <FaCheckCircle className="text-success" />
                                                <BsThreeDotsVertical className="text-muted" />
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
