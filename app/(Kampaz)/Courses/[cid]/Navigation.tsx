import {ListGroup, ListGroupItem} from "react-bootstrap";
export default function CourseNavigation() {
    return (
        <ListGroup className="wd list-group fs-5 rounded-0">
            <ListGroupItem action href="/Courses/1234/Home" id="wd-course-home-link"
                  className="list-group-item active border-0"> Home </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/Modules" id="wd-course-modules-link"
                  className="list-group-item text-danger border-0"> Modules </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/Piazza" id="wd-course-piazza-link"
                  className="list-group-item text-danger border-0"> Piazza </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/Zoom" id="wd-course-zoom-link"
                  className="list-group-item text-danger border-0"> Zoom </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/Assignments" id="wd-course-assignments-link"
                  className="list-group-item text-danger border-0"> Assignments </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
                  className="list-group-item text-danger border-0"> Quizzes </ListGroupItem>
            <ListGroupItem action href="/Courses/1234/People/Table" id="wd-course-people-link"
                  className="list-group-item text-danger border-0" > People </ListGroupItem>
        </ListGroup>
    );}
