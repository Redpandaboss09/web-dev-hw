"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

import ModulesControls from "@/app/(Kampaz)/Courses/[cid]/Modules/ModulesControls";
import LessonControlButtons from "@/app/(Kampaz)/Courses/[cid]/Modules/LessonControlButtons";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

type Lesson = {
    name: string;
};

type Module = {
    course: string;
    name: string;
    lessons?: Lesson[];
};

export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const modules = db.modules as Module[];

    return (
        <div>
            <ModulesControls />
            <br />
            <br />
            <br />
            <br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <ListGroupItem
                            key={`${module.course}:${module.name}`}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                                <ModulesControls />
                            </div>

                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson, idx) => (
                                        <ListGroupItem
                                            key={`${module.course}:${module.name}:${lesson.name || idx}`}
                                            className="wd-lesson p-3 ps-1"
                                        >
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                                            <LessonControlButtons />
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    );
}
