"use client";
import { useState } from "react";
import Link from "next/link";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    FormControl,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import type { RootState, AppDispatch } from "../store";
import { enroll, unenroll } from "../Enrollments/reducer";

type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
};
type Enrollment = { user: string; course: string };
type User = { _id: string };

export default function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();

    const courses = useSelector<RootState, Course[]>(
        (s) => s.coursesReducer.courses
    );
    const currentUser = useSelector<RootState, User | null>(
        (s) => s.accountReducer.currentUser
    );
    const runtimeEnrollments = useSelector<RootState, Enrollment[]>(
        (s) => s.enrollmentsReducer.enrollments
    );

    const [showAll, setShowAll] = useState(false);

    const [course, setCourse] = useState<Course>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    });

    const userId = currentUser?._id ?? null;

    const isUserEnrolled = (courseId: string) =>
        userId
            ? runtimeEnrollments.some(
                (e) => e.user === userId && e.course === courseId
            )
            : false;

    const visibleCourses = showAll
        ? courses
        : courses.filter((c) => isUserEnrolled(c._id));

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCourse({ ...course, name: e.target.value });

    const onDescChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setCourse({ ...course, description: e.target.value });

    return (
        <div id="wd-dashboard">
            <div className="d-flex align-items-center">
                <h1 id="wd-dashboard-title" className="flex-grow-1">
                    Dashboard
                </h1>
                <Button
                    variant="primary"
                    onClick={() => setShowAll((s) => !s)}
                    aria-pressed={showAll}
                >
                    Enrollments
                </Button>
            </div>
            <hr />

            <h5>
                New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))}
                >
                    Add
                </button>
                <button
                    className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))}
                    id="wd-update-course-click"
                >
                    Update
                </button>
            </h5>
            <br />

            <FormControl value={course.name} className="mb-2" onChange={onNameChange} />
            <FormControl
                as="textarea"
                value={course.description}
                rows={3}
                onChange={onDescChange}
            />
            <hr />

            <h2 id="wd-dashboard-published">
                {showAll ? "All Courses" : "Published Courses"} ({visibleCourses.length})
            </h2>
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {visibleCourses.map((c) => {
                        const enrolled = isUserEnrolled(c._id);
                        return (
                            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link
                                        href={`/Courses/${c._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        <CardImg
                                            src="/images/reactjs.jpg"
                                            variant="top"
                                            width="100%"
                                            height={160}
                                        />
                                        <CardBody className="card-body">
                                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {c.name}
                                            </CardTitle>
                                            <CardText
                                                className="wd-dashboard-course-description overflow-hidden"
                                                style={{ height: "100px" }}
                                            >
                                                {c.description}
                                            </CardText>

                                            <Button variant="primary">Go</Button>

                                            {enrolled ? (
                                                <button
                                                    className="btn btn-danger ms-2"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        if (!userId) return;
                                                        dispatch(unenroll({ user: userId, course: c._id }));
                                                    }}
                                                >
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-success ms-2"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        if (!userId) return;
                                                        dispatch(enroll({ user: userId, course: c._id }));
                                                    }}
                                                >
                                                    Enroll
                                                </button>
                                            )}

                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(deleteCourse(c._id));
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(c);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}
