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
import AllPackages from "../AllPackages/AllPackages";
import "./Home.css";
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <div className="pb-4">
      
      <div className="mt-5 mb-5">
        <h2 className="mt-3 text-dark text-center text-uppercase">
          ALL packages
        </h2>
      </div>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {services.map((service) => (
            <AllPackages key={service._id} service={service}></AllPackages>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
