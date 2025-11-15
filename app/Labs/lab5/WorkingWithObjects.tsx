"use client";
import React, { useState } from "react";
import {FormControl} from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = React.useState({
        id: 2, name: "NodeJS Module",
        description: "Create a NodeJS server",
        course: "WebDev",
    });
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}lab5/assignment`
    const MODULE_API_URL = `${HTTP_SERVER}lab5/module`;
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <div className="d-flex align-items-center gap-2 mb-3">
                <FormControl className="w-75"
                             id="wd-assignment-title"
                             defaultValue={assignment.title}
                             onChange={(e) =>
                                 setAssignment({ ...assignment, title: e.target.value })
                             }/>
                <a id="wd-update-assignment-title"
                   className="btn btn-primary"
                   href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                    Update Assignment Title
                </a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
                <FormControl className="w-75"
                             id="wd-assignment-score"
                             type="number"
                             defaultValue={assignment.score}
                             onChange={(e) =>
                                 setAssignment({ ...assignment, score: Number(e.target.value) })
                             }/>
                <a id="wd-update-assignment-score"
                   className="btn btn-primary"
                   href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Assignment Score
                </a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-assignment-completed"
                    checked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })
                    }
                />
                <a id="wd-update-assignment-completed"
                   className="btn btn-primary"
                   href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                    Update Assignment Completed
                </a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
                <FormControl className="w-75"
                             id="wd-module-name"
                             defaultValue={module.name}
                             onChange={(e) =>
                                 setModule({ ...module, name: e.target.value })
                             }/>
                <a id="wd-update-module-name"
                   className="btn btn-primary"
                   href={`${MODULE_API_URL}/name/${module.name}`}>
                    Update Module Name
                </a>
            </div>
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${HTTP_SERVER}lab5/assignment`}>
                Get Assignment
            </a>
            <a id="wd-retrieve-modules" className="btn btn-primary"
               href={`${HTTP_SERVER}lab5/module`}>
                Get Module
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${HTTP_SERVER}lab5/assignment/title`}>
                Get Assignment Title
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
               href={`${HTTP_SERVER}lab5/module/name}`}>
                Get Module Name
            </a>
            <hr/>
        </div>
    );}
