import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/2345" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> CS2345 CSS </h5>
                            <p className="wd-dashboard-course-title">
                                CSS Designer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/3456" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> CS3456 Tailwind </h5>
                            <p className="wd-dashboard-course-title">
                                Tailwind developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/4567" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> CS4567 Computer Systems </h5>
                            <p className="wd-dashboard-course-title">
                                Computer Systems
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5678" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> MS5678 Jazz </h5>
                            <p className="wd-dashboard-course-title">
                                Jazz
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/6789" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> US6789 US History </h5>
                            <p className="wd-dashboard-course-title">
                                US History
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/7890" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
                        <div>
                            <h5> EU7890 EU History </h5>
                            <p className="wd-dashboard-course-title">
                                EU History
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );}
