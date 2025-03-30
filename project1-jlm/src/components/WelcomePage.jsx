import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Carousel, Alert, Breadcrumb, Card, Form, Nav, Navbar, NavDropdown, NavbarCollapse, Modal, Dropdown } from 'react-bootstrap';
//import '../assets/bootstrap.min.css';
import logoImage from '../assets/stetsonLogo.png';
import nobelImage from '../assets/nobelPrize.png';
import whitsImage from '../assets/whits.png';
import hawksImage from '../assets/hawks2.jpeg';

import CardGroup from 'react-bootstrap/CardGroup';

function WelcomePage() {

    const [userStatus, setUserStatus] = useState("Logged out"); // This state will control the dropdown status in the bottom
    const navigate = useNavigate(); // This will be used to navigate to different pages
    const handleSelect = (eventKey) => {
        setUserStatus(eventKey); // Update user status when an option is selected
    };

    return (
        <div className="min-vh-100 w-100">
            {/* Header Section */}
                    {/* Navbar Section */}
            <Container className="mt-4 d-flex justify-content-start align-items-center">    
                    <Navbar expand="lg" className="img-fluid">
                    <Container className="mt-4 d-flex justify-content-start align-items-center">
                    <Card.Img variant="top" src={logoImage} className="me-auto img-fluid" style={{width: '15%'}}  />
                        <Navbar.Toggle aria-controls="basic-navbar" className="me-auto"  />


                        <Navbar.Collapse id="basic-navbar-nav" className="me-auto img-fluid">
                        <Nav className="me-auto" >
                        {(userStatus === "User logged in" || userStatus === "Admin logged in") && (
                            <>
                                <Button variant="outline-success" className="ms-4">Profile</Button>
                                <Button variant="outline-success" className="ms-4">Opportunities</Button>
                                <Button variant="outline-success" className="ms-4">Users</Button>
                            </>
                        )}
                        </Nav>
                        <Nav className="ms-auto"> 
                            {/* Dropdown for user login status */}
                            {userStatus === "Admin logged in" && (
                                
                                <NavDropdown title="Administrator" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate('adminPanelOp')}>Approve Opportunity</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate('adminPanelUser')}>Approve User</NavDropdown.Item>

                                </NavDropdown>
                            )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        {/* Cards Section */}
        
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={nobelImage} />
                <Card.Body>
                <Card.Title>Dr. Daniel Plante Wins Nobel Prize of Physics </Card.Title>
                <Card.Text>
                    The Nobel Prize in Physics is awarded to Stetson University professor Dr. Daniel Plante for his
                    groundbreaking research in quantum mechanics and its applications in
                    modern technology. His work has revolutionized our understanding of Physics!
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={whitsImage} />
                <Card.Body>
                <Card.Title>Free Whits Frozen Custard Today!</Card.Title>
                <Card.Text>
                    Stetson is now offering free Whits Frozen Custard to all students and faculty
                    on campus! Stop by the CUB to get your free custard! 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={hawksImage} />
                <Card.Body>
                <Card.Title>Hawks on Campus?</Card.Title>
                <Card.Text>
                    So many Hawks have been spotted on campus!
                    They are flying around and landing on students! Isn't that so cool?
                    If you see a hawk, please take a picture and send it to the Stetson University
                    Instagram page!
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 12 mins ago</small>
                </Card.Footer>
            </Card>
    </CardGroup>
    
        {/* User login dropdown Section */}
        <Container className= "d-flex justify-content-center align-items-center mt-5 mb-5">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {userStatus}
                </Dropdown.Toggle>
        
                <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSelect("Logged out")}>Not logged in</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelect("User logged in")}>User logged in</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelect("Admin logged in")}>Admin logged in</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        </Container>

    </div>

    );
}

export default WelcomePage;