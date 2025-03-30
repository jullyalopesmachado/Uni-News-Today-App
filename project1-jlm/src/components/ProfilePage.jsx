// Import necessary dependencies
import React, { useState, useEffect } from "react"; // React core features (state and effects)
import { Container, Navbar, Nav, NavDropdown, Card, Button, Dropdown } from 'react-bootstrap'; // Bootstrap components for styling
import { useNavigate, useParams } from "react-router-dom"; // React Router for navigation and route parameters
import logoImage from '../assets/stetsonLogo.png'; // Import logo image asset
import avatarImage from '../assets/eddiechris.jpg'; // Import avatar image asset
import backgroundImage from '../assets/8721c539-55df-468e-bbfc-3aa36fa6374a.png'; // Import background image asset
import backgroundIv from '../assets/backinv.png'; // Import background image asset
function ProfilePage() {
    // State variables to store user profile data
    const [_id, setId] = useState(null);
    const [user_name, setUserName] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [year_graduated, setYearGraduated] = useState(null);
    const [major, setMajor] = useState(null);
    const [company, setCompany] = useState(null);
    const [title, setTitle] = useState(null);
    const [email, setEmail] = useState(null);
    const [linkedin_link, setLinkedin] = useState(null);

    // State variable for user authentication status
    const [userStatus, setUserStatus] = useState("User logged in");
    
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Fetch profile data when the component mounts
    useEffect(() => {
        console.log("Fetching profile...");
        fetchProfile();
    }, []);

    // Function to fetch user profile data from the backend
    const fetchProfile = async () => {
        const token = localStorage.getItem('token'); // Retrieve authentication token
        try {
            const response = await fetch('http://138.197.99.80:2490/api/users/jlm', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const profile = await response.json(); // Parse JSON response
                console.log("API Response JSON:", profile);

                // Update state with retrieved profile data
                setId(profile._id);
                setUserName(profile.user_name);
                setFirstName(profile.first_name);
                setLastName(profile.last_name);
                setYearGraduated(profile.year_graduated);
                setMajor(profile.major);
                setCompany(profile.company);
                setTitle(profile.title);
                setEmail(profile.email);
                setLinkedin(profile.linkedin_link);
            } else {
                console.error("Failed to fetch profile. Status:", response.status);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    return (

        <div className="min-vh-100 w-100">
    
            {/* Navigation Bar */}
            <Container className="mt-4 d-flex justify-content-start align-items-center">
                <Navbar expand="lg">
                    <Container className="mt-4 d-flex justify-content-start align-items-center">

                        {/* Logo and Navbar */}
                        <Card.Img variant="top" src={logoImage} className="me-auto img-fluid" style={{ width: '15%' }} />
                        <Navbar.Toggle aria-controls="basic-navbar" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* Display navigation options based on user status */}
                                {(userStatus === "User logged in" || userStatus === "Admin logged in") && (
                                    <>
                                        <Button variant="outline-success" className="ms-4">Home</Button>
                                        <Button variant="outline-success" className="ms-4">Opportunities</Button>
                                        <Button variant="outline-success" className="ms-4">Users</Button>
          
                                    </>
                                )}
                            </Nav>

                            <Nav className="me-auto">
                                {userStatus === "Admin logged in" && (
                                    <NavDropdown title="Administrator">
                                        <NavDropdown.Item onClick={() => navigate('adminPanelOp')}>Approve Opportunity</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => navigate('adminPanelUser')}>Approve User</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            {/* Profile Card */}
            <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">

                          {/* Background image positioned in the top-right corner of the navbar */}
                          <div
                            style={{
                            position: 'absolute',  // Positioning it within the navbar
                            top: 0,
                            right: 0,
                            width: '200px',  // Set a small size for the background image
                            height: '350px',  // Set a small size for the background image
                            backgroundImage: `url(${backgroundImage})`,  // Background image URL
                            backgroundSize: 'cover',  // Ensure the background image covers the div
                            backgroundRepeat: 'no-repeat',  // Prevent repeating the image
                            }}
                />

                        <div
                            style={{
                            position: 'absolute',  // Positioning it within the navbar
                            top: 500,
                            right: 1100,
                            width: '400px',  // Set a small size for the background image
                            height: '350px',  // Set a small size for the background image
                            backgroundImage: `url(${backgroundIv})`,  // Background image URL
                            backgroundSize: 'cover',  // Ensure the background image covers the div
                            backgroundRepeat: 'no-repeat',  // Prevent repeating the image
                            }}
                />


                
                     
                <Card style={{ width: '28rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <div className="d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={avatarImage} className="rounded-circle img-fluid" style={{ height: '220px', width: '240px' }} />

                    </div>
                    <Card.Body>
                        <Card.Title>{first_name} {last_name}</Card.Title>
                        <Card.Text><strong>Major:</strong> {major}</Card.Text>
                        <Card.Text><strong>Company:</strong> {company}</Card.Text>
                        <Card.Text><strong>Title:</strong> {title}</Card.Text>
                        <Card.Text>
                            <strong>LinkedIn:</strong> {linkedin_link ? <a href={linkedin_link} target="_blank" rel="noopener noreferrer">Profile</a> : "No LinkedIn provided"}
                        
                        </Card.Text>

                    </Card.Body>
                </Card>
            
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
        </div>

    );
}

export default ProfilePage;
