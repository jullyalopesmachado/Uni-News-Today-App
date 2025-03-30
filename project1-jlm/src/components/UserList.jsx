import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Pagination, Navbar, NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import logoImage from "../assets/stetsonLogo.png";
import backgroundImage from "../assets/8721c539-55df-468e-bbfc-3aa36fa6374a.png"; 
import backgroundIv from "../assets/backinv.png"; 
import Nav from "react-bootstrap/Nav";

function UserList() {
    const [users, setUsers] = useState([]); // Store all users
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of cards per page
    const navigate = useNavigate();
    const [userStatus, setUserStatus] = useState("User logged in");

    // Fetch users when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem("token"); 
            try {
                const response = await fetch("http://138.197.99.80:2490/api/users", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUsers(data); // Store all users
                } else {
                    console.error("Failed to fetch users. Status:", response.status);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.length / itemsPerPage);

    return (
        <div className="min-vh-100 w-100">
            {/* Navigation Bar */}
            <Container className="mt-4 d-flex justify-content-start align-items-center">
                <Navbar expand="lg">
                    <Container>
                        <Card.Img variant="top" src={logoImage} className="me-auto img-fluid" style={{ width: "15%" }} />
                        <Navbar.Toggle aria-controls="basic-navbar" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {(userStatus === "User logged in" || userStatus === "Admin logged in") && (
                                    <>
                                        <Button variant="outline-success" className="ms-4" onClick={() => navigate("/")}>Home</Button>
                                        <Button variant="outline-success" className="ms-4" onClick={() => navigate("/profilePage")}>Profile</Button>
                                        <Button variant="outline-success" className="ms-4">Users</Button>
                                    </>
                                )}
                            </Nav>
                            <Nav className="me-auto">
                                {userStatus === "Admin logged in" && (
                                    <NavDropdown title="Administrator">
                                        <NavDropdown.Item onClick={() => navigate("adminPanelOp")}>Approve Opportunity</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => navigate("adminPanelUser")}>Approve User</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            {/* User Cards */}
            <Container className="mt-4">
                <Row>
                    {currentItems.map((user) => (
                        <Col key={user._id} md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                                    <Card.Text>
                                        <strong>Major:</strong> {user.major} <br />
                                        <strong>Company:</strong> {user.company} <br />
                                    </Card.Text>
                                    <Container className="d-flex justify-content-center align-items-center">
                                    <Button variant="outline-success">View Profile</Button>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Pagination */}
                {totalPages > 1 && (
                    <Pagination className="justify-content-center mt-4">
                        <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />

                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}

                        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
                        <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
                    </Pagination>
                )}
            </Container>

            {/* User Status Dropdown */}
            <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        {userStatus}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setUserStatus("User logged in")}>User logged in</Dropdown.Item>
                        <Dropdown.Item onClick={() => setUserStatus("Admin logged in")}>Admin logged in</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>

            {/* Background Images */}
            <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "200px",
                        height: "350px",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 490,
                        right: 1100,
                        width: "400px",
                        height: "350px",
                        backgroundImage: `url(${backgroundIv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </Container>
        </div>
    );
}

export default UserList;
