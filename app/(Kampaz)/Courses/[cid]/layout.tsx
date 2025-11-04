"use client"
import ReactNode from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export default function CoursesLayout({ children }: { // @ts-expect-error
    children: ReactNode }) {
    const { cid } = useParams();
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const course = courses.find((course: any) => course._id === cid);

    return (
        <div id="wd-courses">
            <h2 className="text-danger d-flex align-items-center gap-2">
                <FaAlignJustify className="fs-4" />
                {course?.name}
            </h2>
            <hr />
            <div className="d-flex">
                <aside className="d-none d-md-block me-3" style={{ minWidth: 220 }}>
                    <CourseNavigation />
                </aside>
                <main className="flex-fill">{children}</main>
            </div>
        </div>
    );
}