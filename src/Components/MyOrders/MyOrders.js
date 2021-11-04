import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Orders from "../Orders/Orders";
// import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  // const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // .then((data) => console.log(data))
  }, []);

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
        {users.map((user) => (
          <Orders key={user._id} user={user}></Orders>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
