"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import type { RootState } from "../../store";

type Course = { _id: string; name: string };

export default function CoursesLayout({ children }: { children: ReactNode }) {
    const { cid } = useParams<{ cid: string }>();
    const courses = useSelector(
        (state: RootState) => state.coursesReducer.courses as Course[]
    );
    const course = courses.find((c) => c._id === cid);

    return (
        <div id="wd-courses">
            <h2 className="text-danger d-flex align-items-center gap-2">
                <FaAlignJustify className="fs-4" />
                {course?.name}
            </h2>
            <hr />
            <div className="d-flex">
                <aside className="d-none d-md-block me-3" style={{ minWidth: 220 }}>
                    <CourseNavigation cid={""} />
                </aside>
                <main className="flex-fill">{children}</main>
            </div>
        </div>
    );
}
