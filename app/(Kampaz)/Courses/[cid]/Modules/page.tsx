"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { addModule, editModule, updateModule, deleteModule, setModules }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import {FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

import * as client from "../../client";
export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: RootState) => state.modulesReducer);
    const dispatch = useDispatch();
    const onUpdateModule = async (module: any) => {
        await client.updateModule(module);
        const newModules = modules.map((m: any) => m._id === module._id ? module : m );
        dispatch(setModules(newModules));
    };
    const onCreateModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await client.createModuleForCourse(cid, newModule);
        dispatch(setModules([...modules, module]));
    };
    const onRemoveModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    };
    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                             addModule={onCreateModuleForCourse} />
            <br />
            <br />
            <br />
            <br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .map((module) => (
                        <ListGroupItem
                            key={`${module.course}:${module.name}`}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" /> {module.name}
                                {!module.editing && module.name}
                                { module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                                 onChange={(e) =>
                                                     dispatch(
                                                         updateModule({ ...module, name: e.target.value })
                                                     )
                                                 }
                                                 onKeyDown={(e) => {
                                                     if (e.key === "Enter") {
                                                         onUpdateModule({ ...module, editing: false });
                                                     }
                                                 }}
                                                 defaultValue={module.name}/>
                                )}
                                <ModuleControlButtons moduleId={module._id}
                                                      deleteModule={(moduleId) => onRemoveModule(moduleId)}
                                                      editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>

                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson, idx) => (
                                        <ListGroupItem
                                            key={`${module.course}:${module.name}:${lesson.title || idx}`}
                                            className="wd-lesson p-3 ps-1"
                                        >
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.title}
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
