import React, { useEffect, useState } from "react";
import axios from "../../api/axois";
import Message from "../Message";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const Profile = () => {
  const [error, setError] = useState(null);
  const [user, setuser] = useState({});
  // const user = {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     bio: 'Full stack developer with a passion for creating innovative solutions.',
  //     location: 'San Francisco, CA',
  //     profilePicture: 'https://via.placeholder.com/150'
  // };

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get("/api/user/profile/", {
        headers: {
          Authorization: `Bearer ${token.slice(1, -1)}`,
        },
      });
      console.log(data);
      setuser(data);
    } catch (error) {
      setError(
        error.message ? error.message : "Request failed with status code 401"
      );
    }
  };
  return (
    <div>
      {error !== null ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Card>
                <Card.Header as="h5">Profile</Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={4} className="text-center">
                      <p style={{
                        width:"200px",
                        height:"200px",
                        backgroundColor:"gray",
                        borderRadius:"50%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:'center',
                        color:"white",
                        textAlign:"center",
                        fontSize:"50px",
                        margin:'0'
                      }}>{user.name}</p>
                      <h5>{user.name}</h5>
                    </Col>
                    <Col md={8}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <strong>Id:</strong> {user.id}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Username:</strong> {user.username}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Email:</strong> {user.email}
                        </ListGroup.Item>
                      </ListGroup>
                      <Button variant="primary" className="mt-3">
                        Edit Profile
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Profile;
