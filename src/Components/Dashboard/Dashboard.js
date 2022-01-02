import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import YourOrders from "./YourOrders/YourOrders";
import AddReview from "./AddReview/AddReview";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Payment from "./Payment/Payment";
import ManageAllProducts from "./ManageAllProducts/ManageAllProducts";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="dashboard-text pt-4">
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
                  className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                  to={`${url}/yourorders`}
                >
                  Your Orders
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                  to={`${url}/payment`}
                >
                  Payment
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                  to={`${url}/addreview`}
                >
                  Add Review
                </NavLink>

                <Nav>
                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                    to={`${url}/addnewproduct`}
                  >
                    Add New Product
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                    to={`${url}/manageallproducts`}
                  >
                    Manage All Products
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                    to={`${url}/manageallorders`}
                  >
                    Manage All Orders
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-active"
                    className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
                    to={`${url}/makeadmin`}
                  >
                    Make Admin
                  </NavLink>
                </Nav>
              </Nav>
            </div>
          </Col>
          <Col xl={10} lg={10}>
            <div className="px-5 w-100">
              <Switch>
                <Route exact path={path}>
                  <YourOrders></YourOrders>
                </Route>

                <Route exact path={`${path}/yourorders`}>
                  <YourOrders></YourOrders>
                </Route>

                <Route path={`${path}/addreview`}>
                  <AddReview></AddReview>
                </Route>

                <Route path={`${path}/payment`}>
                  <Payment></Payment>
                </Route>

                <Route path={`${path}/addnewproduct`}>
                  <AddNewProduct></AddNewProduct>
                </Route>

                <Route path={`${path}/manageallproducts`}>
                  <ManageAllProducts></ManageAllProducts>
                </Route>

                <Route path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </Route>

                <Route path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
