'use client';

import React from 'react';
import {
    Row,
    Col,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    FormCheck,
} from 'react-bootstrap';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container-fluid">
            <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl defaultValue="A1" />
            </FormGroup>
            <FormGroup className="mb-4" controlId="wd-description">
                <FormControl
                    as="textarea"
                    rows={8}
                    defaultValue={`The assignment is available online

                    Submit a link to the landing page of your Web application running on Netlify.
                    
                    The landing page should include the following:
                      • Your full name and section
                      • Links to each of the lab assignments
                      • Link to the Kanbas application
                      • Links to all relevant source code repositories
                    
                    The Kanbas application should include a link to navigate back to the landing page.`
                }
                />
            </FormGroup>

            <Row className="align-items-center mb-3">
                <Col sm={4} className="text-sm-end">
                    <FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel>
                </Col>
                <Col sm={8}>
                    <FormControl id="wd-points" type="number" defaultValue={100} style={{ maxWidth: 240 }} />
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
                            <FormControl type="datetime-local" defaultValue="2024-05-13T23:59" style={{ maxWidth: 320 }} />
                        </FormGroup>

                        <Row className="g-3">
                            <Col>
                                <FormGroup controlId="wd-available-from">
                                    <FormLabel className="d-block">Available from</FormLabel>
                                    <FormControl type="datetime-local" defaultValue="2024-05-06T00:00" />
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
