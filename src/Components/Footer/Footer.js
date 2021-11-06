import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      // style={{ backgroundColor: "whiteSmoke" }}
      className="main-footer w-100 bg-dark"
    >
      <div className="w-100 py-3 bg-dark">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <Container>
            <span className="text-white">
              <span className="d-block text-center text-uppercase fs-5">
                {" "}
                <strong style={{ color: "#EA3C23" }}>crud</strong> operation{" "}
              </span>{" "}
              Copyright &copy; 2021 All Rights Reserved{" "}
            </span>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
