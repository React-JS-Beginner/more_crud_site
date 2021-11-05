import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // .then((data) => console.log(data))
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          console.log(remainingOrders);
          setOrders(remainingOrders);
        }
      });
  };

  return (
    <Container className="mb-5 pb-5">
      <div>
        <h2
          className="m-5"
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          My <span style={{ color: "#ea3c23" }}>orders</span>
        </h2>
      </div>
      <Row className="g-5">
        {orders.map((order) => (
          <Col xl={3} lg={3}>
          <Card>
            <Card.Img variant="top" src={order.singleServiceImg} />
            <Card.Body className="text-center">
              <Card.Title>
                {" "}
                <span style={{ color: "#ea3c23" }}>{order.singleServiceName}</span>{" "}
              </Card.Title>
              <span className="fs-3">{order.ButtonsingleServiceCost}</span>
              <Card.Text>
                BOOKED BY <br /> <i className="fas fa-user"></i> {order.userName}{" "}
              </Card.Text>
              <Button
                onClick={() => deleteHandler(order._id)}
                className="text-center btn-danger px-4"
                size="sm"
              >
                Cancel
              </Button>
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "#e0e0eb" }}
              className="text-center"
            >
              <small className="text-muted">{order.bookedServiceStatus}</small>
            </Card.Footer>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
