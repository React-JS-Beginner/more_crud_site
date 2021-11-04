import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import HomeServices from "../HomeServices/HomeServices";
import "./Home.css";
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <div className="pb-4">
      <div className="banner d-flex align-items-end justify-content-center">
        <div className="pb-5">
          <h1 className="welcome-shadow text-white text-center text-uppercase display-1">
            Welcome
          </h1>
          <h4 className="welcome-shadow text-white text-center text-uppercase">
            to
          </h4>
          <h3 className="text-center text-uppercase">
            <span style={{ color: "#ea3c23" }}>Trip</span> <br /> Toe
          </h3>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h4 style={{ color: "#ea3c23" }} className="text-center">
          Special Offer
        </h4>
        <h2 className="mt-3 text-dark text-center text-uppercase">
          Our Most Popular And <br /> Best Adventures
        </h2>
      </div>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {services.map((service) => (
            <HomeServices key={service._id} service={service}></HomeServices>
          ))}
        </Row>
      </Container>
      {/* CLIENTS///////////////////////////////////////////////////////////*/}
      <Container>
      <h4 className="text-center text-uppercase pt-4 display-6">
          our beloved <strong style={{ color: "#ea3c23" }}>clients</strong>
        </h4>
        <div className="d-flex justify-content-center">

          {/* Review  */}
          <div className="text-center p-5">
          <div>
            <img
              width="128"
              height="128"
              className="rounded-circle mb-4 shadow"
              src="https://randomuser.me/api/portraits/women/51.jpg"
              alt=""
            />
          </div>
          <div>
            <strong>Virginia Apgar</strong>
            <p>Nice and Classy, everything is available.</p>
          </div>
        </div>
          {/* Review  */}
          <div className="text-center p-5">
          <div>
            <img
              width="128"
              height="128"
              className="rounded-circle mb-4 shadow"
              src="https://randomuser.me/api/portraits/men/78.jpg"
              alt=""
            />
          </div>
          <div>
            <strong>Josh Barret</strong>
            <p>Awesome trip offers and frendly behaviour.</p>
          </div>
        </div>
          {/* Review  */}
          <div className="text-center p-5">
          <div>
            <img
              width="128"
              height="128"
              className="rounded-circle mb-4 shadow"
              src="https://randomuser.me/api/portraits/women/52.jpg"
              alt=""
            />
          </div>
          <div>
            <strong>Ana Aslan</strong>
            <p>Wonderful travel plans for families.</p>
          </div>
        </div>

        </div>
      </Container>
      <Container
        style={{ borderRadius: "10px" }}
        className="shadow mb-5 p-5 d-flex justify-content-center w-50 bg"
      >
        <InputGroup className="w-75">
          <div>
            <h4 className="text-secondary text-uppercase text-center mb-4">
              Subscribe To Our Newsletter For Latest Update
            </h4>
          </div>
          <FormControl
            placeholder="Enter Your Email"
            aria-label="Enter Your Email"
            aria-describedby="basic-addon2"
          />
          <Button
            className="text-uppercase"
            variant="danger px-4"
            id="button-addon2"
          >
            Subscribe
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Home;
