import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const DatePicker = () => {
    const valid = function( current ){
        return current.day() !== 0 && current.day() !== 7;
    };
  return (
    <div className="mt-5 mb-5">
      <h2
        style={{ color: "#ea3c23" }}
        className="mt-3 mb-5 text-center text-uppercase"
      >
        Date Picker
      </h2>
      <Container >
        <Row className="align-items-center">
          <Col> <Datetime isValidDate={ valid } input={ false } /> </Col>
          <Col>
            <div className="px-5">
              <h1 className="text-center text-uppercase display-4">
                pick <br /> <strong style={{ color: "#ea3c23" }}>date</strong> and  <strong style={{ color: "#ea3c23" }}>time</strong>
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DatePicker;
