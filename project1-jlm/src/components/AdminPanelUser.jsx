import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Accordion, Button, Carousel, Alert, Breadcrumb, Card, Form, Nav, Navbar, NavDropdown, NavbarCollapse, Modal, Dropdown } from 'react-bootstrap';
//import '../assets/bootstrap.min.css';
import logoImage from '../assets/stetsonLogo.png';
import backgroundImage from '../assets/8721c539-55df-468e-bbfc-3aa36fa6374a.png'; // Import background image asset
import backgroundIv from '../assets/backinv.png'; // Import background image asset
import CardGroup from 'react-bootstrap/CardGroup';

function AdminPanelUser() {

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
                                    <Nav className="me-auto" >
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
                        'danger',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                        You are up to date with all new users. 
                        Let's learn some fun facts while we wait!
                        </Alert>
                    ))}
                    </>
            </Container>

            <Container className= "align-items-center mt-5 mb-5">
                    <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                        <Accordion.Header>Stetson Faculty</Accordion.Header>
                            <Accordion.Body>
                            Stetson University is a private university in DeLand, Florida, United States.
                            Established in 1883 as DeLand Academy, it was later renamed John B. 
                            Stetson University in honor of John B. Stetson.
                            Stetson has famous professors! 
                            Dr. Plante, professor of Computer Science,
                            has won a Nobel Prize in Physics! 
                            Also, Dr. Hala ElAarag is a former Nasa pilot!
                            </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Nature</Accordion.Header>
                        <Accordion.Body>
                            Birds are the best animals! They are so cute and fluffy!
                            Did you know that some birds can fly at speeds of up to 60 mph?
                            Also, some birds can fly at altitudes of up to 30,000 feet!
                            And some birds can even fly for days without stopping!
                            Isn't that amazing?
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Music</Accordion.Header>
                        <Accordion.Body>
                            Grunge rock is the best genre of music! 
                            Some famous grunge rock bands are Alice in Chains, Nirvana, Pearl Jam, and Soundgarden.
                            Did you know that the lead singer of Alice in Chains, Layne Staley,
                            was a former member of the band Mad Season?
                            Also, the lead singer of Soundgarden, Chris Cornell,
                            was a former member of the band Audioslave!
                            And the lead singer of Pearl Jam, Eddie Vedder, is the coolest guy ever! He wrote 
                            many songs including the hit song "Black"!
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>World</Accordion.Header>
                        <Accordion.Body>
                            Did you know Brazil has one of the most incredible
                            cuisines in the world? It is a mix of African, European, and indigenous influences.
                            Some of the most popular dishes are feijoada, a black bean stew with pork,
                            and moqueca, a fish stew with coconut milk.
                            Also, Brazil is home to the Amazon rainforest! It is a beautiful welcoming country
                            full of amazing wildlife and culture!
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                                       top: 600,
                                       right: 1100,
                                       width: '400px',  // Set a small size for the background image
                                       height: '140px',  // Set a small size for the background image
                                       backgroundImage: `url(${backgroundIv})`,  // Background image URL
                                       backgroundSize: 'cover',  // Ensure the background image covers the div
                                       backgroundRepeat: 'no-repeat',  // Prevent repeating the image
                                       }}
                            />
                </Container>

        </div>
    
    </div>



        
);
}; export default AdminPanelUser;