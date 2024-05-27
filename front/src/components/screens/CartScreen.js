import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import Message from "../Message";
import { useNavigate } from "react-router-dom";

function CartScreen() {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setCartItems(
      JSON.parse(localStorage.getItem("cart")) === null
        ? []
        : JSON.parse(localStorage.getItem("cart"))
    );
  }, []);

  const checkoutHandler = () => {
    setShow(true);
    localStorage.removeItem("cart");
    setTimeout(() => {
      navigate("/")
    }, 1500);
  };

  const removeFromCartHandler = (id) => {
    if (id !== -1) {
      localStorage.setItem(
        "cart",
        JSON.stringify(cartItems.filter((x) => x.product !== id))
      );
    }
  };

  const removeQty = (product) => {
    let newCart = cartItems.filter((x) => (x.product === product ? (x.qty -= 1) : x.qty))
    localStorage.setItem(
      "cart",
      JSON.stringify(
        newCart
      )
    );
    setCartItems(newCart)
  };
  const addQty = (product) => {
    let newCart = cartItems.filter((x) => (x.product === product ? (x.qty += 1) : x.qty))
    localStorage.setItem(
      "cart",
      JSON.stringify(
        newCart
      )
    );
    setCartItems(newCart)
  };
  return (
    <div style={{ margin: "20px", height: "70vh" }}>
      {!show ? (
        <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <Message variant="info">
                Your cart is empty <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>

                      <Col md={2}>${item.price}</Col>

                      <Col
                        md={3}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => addQty(item.product)}
                        >
                          <i className="fas fa-plus"></i>
                        </Button>
                        <p
                          style={{
                            width: "75px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            border: "4px solid lightgray",
                            backgroundColor: "#EEEEEE",
                            justifyContent: "center",
                            fontSize: "1.2em",
                            fontWeight: "600",
                            margin: "0",
                          }}
                        >
                          {item.qty}
                        </p>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeQty(item.product)}
                        >
                          <i className="fas fa-minus"></i>
                        </Button>
                      </Col>

                      <Col md={1}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      ) : (
        <div>
          <Alert show={show} variant="success">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Alert.Heading>Successfull.</Alert.Heading>
              <CloseButton onClick={() => setShow(false)} />
            </div>
            <p>
              Your order has been placed successfully.
            </p>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
