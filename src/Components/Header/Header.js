import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="py-1 bg-dark">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand
            style={{ lineHeight: "1" }}
            className="text-center text-uppercase text-white"
          >
            <span className="d-block fs-3">
              {" "}
              <strong style={{ color: "#EA3C23" }}>crud</strong>{" "}
            </span>{" "}
            <span className="fs-6 d-block text-white text-uppercase">
              operation
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5 me-auto align-items-center">
              <NavLink
                className="fs-6 text-white me-3 text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>

              <NavDropdown
                title={<span className="fs-6 text-white my-auto">Admin</span>}
                id="collasible-nav-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item className="bg-white">
                  <NavLink
                    activeClassName="dropnav-active"
                    className="dropnav me-3 text-decoration-none"
                    to="/myorders"
                  >
                    My Orders
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="bg-white">
                  <NavLink
                    activeClassName="dropnav-active"
                    className="dropnav me-3 text-decoration-none"
                    to="/manageorders"
                  >
                    Manage All Orders
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="bg-white">
                  <NavLink
                    activeClassName="dropnav-active"
                    className="dropnav me-3 text-decoration-none"
                    to="/addnewservice"
                  >
                    Add New Package
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="d-flex align-items-center">
              <div>
                {user?.email && (
                  <img
                    className="rounded-circle user-img"
                    width={32}
                    height={32}
                    src={user.photoURL}
                    alt=""
                  />
                )}
              </div>
              <NavLink
                className="fs-6 ms-3 me-3 text-decoration-none text-white"
                to="#"
              >
                {user.displayName}
              </NavLink>

              {!user?.email && (
                <NavLink
                  activeClassName="navs-active"
                  className="fs-6 navs ms-3 me-3 text-decoration-none"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}

              {user?.email && (
                <NavLink
                  activeClassName="navs-active"
                  className="fs-6 navs ms-3 me-3 text-decoration-none"
                  to="/signin"
                  onClick={logOut}
                >
                  Log Out
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
