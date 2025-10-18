"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type Props = { cid: string };

const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
] as const;

const toSegment = (label: string) => label;

export default function CourseNavigation({ cid }: Props) {
    const pathname = usePathname();
    const encodedCid = encodeURIComponent(cid);

    return (
        <ListGroup className="wd list-group fs-5 rounded-0">
            {links.map((label) => {
                const segment = toSegment(label);
                const href = `/Courses/${encodedCid}/${segment}`;
                const isActive =
                    pathname === href || pathname?.startsWith(`${href}/`);

                return (
                    <ListGroupItem
                        key={label}
                        as={Link}
                        href={href}
                        id={`wd-course-${segment.toLowerCase()}-link`}
                        action
                        active={!!isActive}
                        className={`border-0 ${isActive ? "" : "text-danger"}`}
                    >
                        {label}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
}
