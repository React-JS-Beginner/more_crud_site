import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPackages = (props) => {
  const { _id, serviceName, serviceImg, serviceTime, serviceCost } =
    props.service;
  return (
    <Col xl={4} lg={4}>
      <Card>
        <Card.Img variant="top" src={serviceImg} />
        <Card.Body className="p-4">
          <Card.Text className="d-flex justify-content-between align-items-center">
            {" "}
            <div className="d-flex align-items-center">
              <strong style={{ fontSize: "18px", color: "#ea3c23" }}>
                {serviceCost}
              </strong>
              <span>/Per Person</span>
            </div>
            <span>
              <i className="far fa-calendar-minus"></i>&nbsp;{serviceTime}
            </span>{" "}
          </Card.Text>

          <Card.Title>
            {" "}
            <h3>{serviceName}</h3>{" "}
          </Card.Title>

          <Link to={`/services/${_id}`} className="mt-auto">
            <Button className="mt-3 px-4" variant="danger">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllPackages;
