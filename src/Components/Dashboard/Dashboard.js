import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Nav, NavLink, Button } from "react-bootstrap";
import AdminRoute from "../AdminRoute/AdminRoute";
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

                {/* {admin && ( */}
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
                {/* )} */}

                <NavLink
                  activeClassName="dashboard-active"
                  // onClick={logOut}
                  className="dashboard-navText mb-3 text-white text-decoration-none text-uppercase"
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
            <div className="menubar px-5 w-100">
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

                <AdminRoute path={`${path}/addnewproduct`}>
                  <AddNewProduct></AddNewProduct>
                </AdminRoute>

                <AdminRoute path={`${path}/manageallproducts`}>
                  <ManageAllProducts></ManageAllProducts>
                </AdminRoute>

                <AdminRoute path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </AdminRoute>

                <AdminRoute path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
