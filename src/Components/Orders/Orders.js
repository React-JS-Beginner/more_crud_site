import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Orders.css";
const Orders = (props) => {
  const {
    _id,
    userName,
    bookedServiceStatus,
    singleServiceName,
    singleServiceImg,
    singleServiceCost,
  } = props.user;

  const [orders, setOrders] = useState([]);

  const deleteHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          console.log(remainingOrders);
          setOrders(remainingOrders);
          window.location.reload();
          return false;
        }
      });
  };

  return (
    <Col xl={3} lg={3}>
      <Card>
        <Card.Img variant="top" src={singleServiceImg} />
        <Card.Body className="text-center">
          <Card.Title>
            {" "}
            <span style={{ color: "#ea3c23" }}>{singleServiceName}</span>{" "}
          </Card.Title>
          <span className="fs-3">{singleServiceCost}</span>
          <Card.Text>
            BOOKED BY <br /> <i className="fas fa-user"></i> {userName}{" "}
          </Card.Text>
          <Button
            onClick={() => deleteHandler(_id)}
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
          <small className="text-muted">{bookedServiceStatus}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Orders;
