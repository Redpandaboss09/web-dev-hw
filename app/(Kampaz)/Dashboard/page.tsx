"use client"
import { useState } from "react";
import Link from "next/link";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import * as db from "../Database";
import { RootState } from "../store";
import { enroll, unenroll } from "../Enrollments/reducer";

export default function Dashboard() {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { enrollments } = db;
    const { enrollments: runtimeEnrollments } = useSelector((s: any) => s.enrollmentsReducer);
    const [showAll, setShowAll] = useState(false);

    const isUserEnrolled = (courseId: string) =>
        runtimeEnrollments.some((e: any) => e.user === currentUser._id && e.course === courseId);

    const visibleCourses = showAll
        ? courses
        : courses.filter((c: any) => isUserEnrolled(c._id));

    return (
        <div id="wd-dashboard">
            <div className="d-flex align-items-center">
                <h1 id="wd-dashboard-title" className="flex-grow-1">Dashboard</h1>
                <Button
                    variant="primary"
                    onClick={() => setShowAll(s => !s)}
                    aria-pressed={showAll}
                >
                    Enrollments
                </Button>
            </div>
            <hr />

            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => dispatch(addNewCourse(course))} > Add </button>
                <button className="btn btn-warning float-end me-2"
                        onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                    Update </button>
            </h5><br />
            <FormControl value={course.name} className="mb-2"
                         onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <FormControl value={course.description} rows={3}
                         onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
            <hr />

            <h2 id="wd-dashboard-published">
                {showAll ? "All Courses" : "Published Courses"} ({visibleCourses.length})
            </h2>
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {visibleCourses.map((course: any) => {
                        const enrolled = isUserEnrolled(course._id);
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link href={`/Courses/${course._id}/Home`}
                                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                        <CardBody className="card-body">
                                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name} </CardTitle>
                                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                {course.description} </CardText>

                                            {/* Keep your Go/Edit/Delete workflow intact */}
                                            <Button variant="primary"> Go </Button>

                                            {/* NEW: Enroll/Unenroll button (updates Redux) */}
                                            {enrolled ? (
                                                <button
                                                    className="btn btn-danger ms-2"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        dispatch(unenroll({ user: currentUser._id, course: course._id }));
                                                    }}
                                                >
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-success ms-2"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        dispatch(enroll({ user: currentUser._id, course: course._id }));
                                                    }}
                                                >
                                                    Enroll
                                                </button>
                                            )}

                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                                dispatch(deleteCourse(course._id));
                                            }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                        )})}
                </Row>
            </div>
        </div>);
    }