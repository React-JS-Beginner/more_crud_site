import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllOrders from "../AllOrders/AllOrders";

const ManageAllServices = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <Container className="my-5 pb-5">
      <h3 className="text-center text-dark mb-2 text-uppercase">
        manage all <span style={{ color: "#ea3c23" }}>Orders</span>
      </h3>
      <p className="fs-4 text-center text-dark mb-5 text-uppercase">total <strong style={{color:'#ea3c23'}}>{users.length}</strong> orders</p>
      <Row className="g-4">
        {users.map((user) => (
          <AllOrders key={user._id} user={user}></AllOrders>
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllServices;
