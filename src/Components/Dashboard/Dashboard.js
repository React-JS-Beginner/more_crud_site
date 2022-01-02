import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Nav, NavLink, Button } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
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
            <div className="pt-5 px-2">
              <Nav className="d-grid me-auto">
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/yourorders`}
                >
                  Your Orders
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/payment`}
                >
                  Payment
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/addreview`}
                >
                  Add Review
                </NavLink>

                {/* {admin && ( */}
                <Nav>
                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard mb-3 text-decoration-none text-uppercase"
                    to={`${url}/addnewproduct`}
                  >
                    Add New Product
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard mb-3 text-decoration-none text-uppercase"
                    to={`${url}/manageallproducts`}
                  >
                    Manage All Products
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard mb-3 text-decoration-none text-uppercase"
                    to={`${url}/manageallorders`}
                  >
                    Manage All Orders
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard mb-3 text-decoration-none text-uppercase"
                    to={`${url}/makeadmin`}
                  >
                    Make Admin
                  </NavLink>
                </Nav>
                {/* )} */}

                <NavLink
                  activeClassName="dashboard-active"
                  // onClick={logOut}
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to="/home"
                >
                  <Button size="sm" variant="danger mt-3 px-4">
                    Log Out
                  </Button>
                </NavLink>
              </Nav>
            </div>
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
