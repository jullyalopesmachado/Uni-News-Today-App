import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Carousel, Alert, Breadcrumb, Card, Form, Nav, Navbar, NavDropdown, NavbarCollapse, Modal } from 'react-bootstrap';
//import '../assets/bootstrap.min.css';
import logoImage from '../assets/stetsonLogo.png';
import nobelImage from '../assets/nobelPrize.png';
import whitsImage from '../assets/whits.png';
import hawksImage from '../assets/hawks2.jpeg';

import CardGroup from 'react-bootstrap/CardGroup';

function WelcomePage() {
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
                            <Button variant="outline-success" className="ms-4">Profile</Button>
                            <Button variant="outline-success" className="ms-4">Opportunities</Button>
                            <Button variant="outline-success" className="ms-4">Users</Button>
                        </Nav>
                        <Nav className="ms-auto"> 
                                <NavDropdown title="Administrator" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
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
                    Stetson is now offerign free Whits Frozen Custard to all students and faculty
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
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    </CardGroup>

    </div>
    );
}

export default WelcomePage;