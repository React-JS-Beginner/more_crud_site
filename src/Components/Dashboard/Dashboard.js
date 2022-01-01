import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard pt-4">
        <span className="text-uppercase">DashBoard</span>
      </div>
      <hr className="new" />
      <Container className="mt-2">
        <Row>
          <Col xl={2} lg={2} className="side-menu">
            <p className="text-center pt-3">Side Menu</p>
          </Col>
          <Col xl={10} lg={10}>
            <p className="text-center pt-3">Product Orders</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
