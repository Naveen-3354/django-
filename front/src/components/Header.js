import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    setUserInfo(localStorage.getItem("userInfo"));
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    localStorage.removeItem("token");

  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>A.R.K</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ maxHeight: "100px", maxWidth:"100%" }}>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{display:"flex", justifyContent:"space-evenly", width:"50%" , alignItems:"center",}}
              navbarScroll
            >
              <Link to="/" style={{ textDecoration: "none" ,  color:"#fff"}}>
                <i className="fas fa-home"></i> Home
              </Link>

              <Link to="/cart" style={{ textDecoration: "none" ,  color:"#fff"}}>
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
              {userInfo ? (
                <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
                  <Link to="/profile" style={{ textDecoration: "none" ,  color:"#fff"}}>
                    <p style={{margin:"0",color:"#fff"}}>Profile</p>
                  </Link>

                  <p onClick={logoutHandler} style={{
                    margin:'0',
                    color:"#fff",
                    cursor:"pointer"
                  }}>
                    Logout
                  </p>
                </div>
              ) : (
                <Link to="/login" style={{ textDecoration: "none",color:"#fff" }}>
                  <i className="fas fa-user"></i> Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
