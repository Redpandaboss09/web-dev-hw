import Link from "next/link";
import Image from "next/image";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
                    {/* CS1234 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open CS1234 React JS"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="CS1234 React JS cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS1234 React JS
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Full Stack software developer
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* CS2345 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/2345/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open CS2345 CSS"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="CS2345 CSS cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS2345 CSS
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        CSS Designer
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* CS3456 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/3456/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open CS3456 Tailwind"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="CS3456 Tailwind cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS3456 Tailwind
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Tailwind developer
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* CS4567 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/4567/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open CS4567 Computer Systems"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="CS4567 Computer Systems cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS4567 Computer Systems
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Computer Systems
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* MS5678 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/5678/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open MS5678 Jazz"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="MS5678 Jazz cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        MS5678 Jazz
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Jazz
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* US6789 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/6789/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open US6789 US History"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="US6789 US History cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        US6789 US History
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        US History
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    {/* EU7890 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card className="h-100 shadow-sm">
                            <Link
                                href="/Courses/7890/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                aria-label="Open EU7890 EU History"
                            >
                                <CardImg
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    alt="EU7890 EU History cover"
                                    width="100%"
                                    height={160}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        EU7890 EU History
                                    </CardTitle>
                                    <CardText
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        EU History
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );}
