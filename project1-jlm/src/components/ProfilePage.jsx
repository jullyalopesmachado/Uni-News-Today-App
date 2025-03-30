// Importing React and useState hook for managing component state
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Card, Button} from 'react-bootstrap';
import logoImage from '../assets/stetsonLogo.png';
import { useNavigate } from "react-router-dom";
import avatarImage from '../assets/eddie.png';
function  ProfilePage() {

    const [firstName, setFirstName] = useState("Layne");
    const [lastName, setLastName] = useState("Staley");
    const [userBio, setUserBio] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [userWebsite, setUserWebsite] = useState(null);
    const [userId, setUserId] = useState(null); 
  
    const [userStatus, setUserStatus] = useState("Logged out"); // This state will control the dropdown status in the bottom
    const navigate = useNavigate(); // This will be used to navigate to different pages
    
    
  const fetchProfile = async () => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    try {
      const response = await fetch("http://138.197.99.80:2490/api/users", { // or http://localhost:2400/users
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const profile = await response.json();

        console.log("User Profile:", profile);

        // Split user.name into firstName and lastName
        const [firstName, lastName] = (profile.name || "").split(" ");
        setFirstName(firstName || "");
        setLastName(lastName || "");

        // Set other profile data
        setUserId(profile._id);
        setUserBio(profile.bio || "");
        setUserLocation(profile.location || "");
        setUserWebsite(profile.website || "");
      } else {
        console.error("Error fetching user profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
    }, []);

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
                        {/* User profile card Section */}                  
                            
                    <Container className="d-flex justify-content-center align-items-center mt-2 min-vh-110">

                        <Card style={{ width: '28rem', paddingTop: '8rem' , paddingBottom: '3rem' ,  background: 'linear-gradient(rgba(199, 200, 216, 0.9), rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.9)' }}>
                        <div  className="d-flex justify-content-center align-items-center">
                        <Card.Img variant="top" src={avatarImage}/* will be pulled from database*/  className="rounded-circle img-fluid h-100 w-50" />
                        </div>
                            <Card.Body>
                            {/* Display user's first and last name */}
                            <Card.Title>{firstName} {lastName}</Card.Title>
                                {/* Display user's bio */}
                                <Card.Text>
                                {userBio || "No bio provided"}
                                </Card.Text>

                                {/* Display user's location */} 

                            <Card.Text>
                                <strong>Located in:</strong> {userLocation || "No location provided"}
                            </Card.Text>

                            {/* Display user's website */}
                            <Card.Text>
                                <strong>Find {firstName} at: </strong>
                                {userWebsite || "No website provided"}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Container>



                        </div>
                    </div>
            

)} export default ProfilePage;