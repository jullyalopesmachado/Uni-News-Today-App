import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Carousel, Alert, Breadcrumb, Card, Form, Nav, Navbar, NavDropdown, NavbarCollapse, Modal, Dropdown } from 'react-bootstrap';
//import '../assets/bootstrap.min.css';
import logoImage from '../assets/stetsonLogo.png';
import bird1Image from '../assets/birds1.jpg';
import bird2Image from '../assets/birds2.jpg';
import hawksImage from '../assets/hawks2.jpeg';
import backgroundImage from '../assets/8721c539-55df-468e-bbfc-3aa36fa6374a.png'; // Import background image asset
import backgroundIv from '../assets/backinv.png'; // Import background image asset
import CardGroup from 'react-bootstrap/CardGroup';
function AdminPanelOp() {

    const [userStatus, setUserStatus] = useState("Admin logged in"); // This state will control the dropdown status in the bottom
    const navigate = useNavigate(); // This will be used to navigate to different pages
    const handleSelect = (eventKey) => {
        setUserStatus(eventKey); // Update user status when an option is selected
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

                    <div className="min-vh-100 w-100">
                        {/* Header Section */}
                                {/* Navbar Section */}
                        <Container className="mt-4 d-flex justify-content-start align-items-center">    
                                <Navbar expand="lg" className="img-fluid">
                                <Container className="mt-4 d-flex justify-content-start align-items-center">
                                <Card.Img variant="top" src={logoImage} className="me-auto img-fluid" style={{width: '15%'}}  />
                                    <Navbar.Toggle aria-controls="basic-navbar" className="me-auto"  />
            
            
                                    <Navbar.Collapse id="basic-navbar-nav" className="me-auto img-fluid">
                                    <Nav className="ms-auto" >
                                    </Nav>
                                    <Nav className="ms-auto"> 
                                        {/* Dropdown for user login status */}
                                        {userStatus === "Admin logged in" && (
                                            
                                            <NavDropdown title="Administrator" id="basic-nav-dropdown">
                                                <NavDropdown.Item onClick={() => navigate('/')}>Home</NavDropdown.Item>
            
                                            </NavDropdown>
                                        )}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Container>
            
             <Container className= "d-flex justify-content-center align-items-center mt-5 mb-5">
                 <> 
                    {[
                        'success',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                        You are up to date with all opportunities. 
                        Enjoy some cute birds while you wait!
                        </Alert>
                    ))}
                    </>
            </Container>

            <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <>
                <Card>
                <Card.Img
                variant="top"
                src={bird1Image}
                style={{ height: '200px', objectFit: 'cover' }}
                />
                    <Card.Body>
                    <Card.Text>
                      They are so cute!
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Body>
                    <Card.Text>
                        The sweetest little creatures!
                    </Card.Text>
                    </Card.Body>
                    <Card.Img
                        variant="top"
                        src={bird2Image}
                        style={{ height: '200px', objectFit: 'cover' }}
                        />
                </Card>
                </>
            </Container>
                    
                       <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
           
                                     {/* Background image positioned in the top-right corner of the navbar */}
                                     <div
                                       style={{
                                       position: 'absolute',  // Positioning it within the navbar
                                       top: 0,
                                       right: 0,
                                       width: '150px',  // Set a small size for the background image
                                       height: '350px',  // Set a small size for the background image
                                       backgroundImage: `url(${backgroundImage})`,  // Background image URL
                                       backgroundSize: 'cover',  // Ensure the background image covers the div
                                       backgroundRepeat: 'no-repeat',  // Prevent repeating the image
                                       }}
                           />
           
                                   <div
                                       style={{
                                       position: 'absolute',  // Positioning it within the navbar
                                       top: 490,
                                       right: 1100,
                                       width: '400px',  // Set a small size for the background image
                                       height: '250px',  // Set a small size for the background image
                                       backgroundImage: `url(${backgroundIv})`,  // Background image URL
                                       backgroundSize: 'cover',  // Ensure the background image covers the div
                                       backgroundRepeat: 'no-repeat',  // Prevent repeating the image
                                       }}
                            />
                        </Container>

        </div>
    
    </div>



        
);
}; export default AdminPanelOp;