import ReactNode from "react";
import LayoutProps from "next";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";

export default async function CoursesLayout({
                                                children,
                                                params,
                                            }: LayoutProps<"/Courses/[cid]">) {
    const { cid } = await params;
    const course = courses.find((c) => c._id === cid);

    return (
        <div id="wd-courses">
            <h2 className="text-danger d-flex align-items-center gap-2">
                <FaAlignJustify className="fs-4" />
                {course?.name ?? "Course"}
            </h2>
            <hr />
            <div className="d-flex">
                <aside className="d-none d-md-block me-3" style={{ minWidth: 220 }}>
                    <CourseNavigation cid={cid} />
                </aside>
                <main className="flex-fill">{children}</main>
            </div>
        </div>
    );
}