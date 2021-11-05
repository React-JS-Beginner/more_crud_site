import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./BookingService.css";

const BookingService = () => {
  const { id } = useParams();
  const [singleService, setSingleService] = useState([]);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);

  //Booking FORM Submit
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/orders", data).then((res) => {
      // console.log(res);
      if (res.data.insertedId) {
        alert("Trip Package Booked Successfully!");
      }
    });
  };

  return (
    <div>
      <div className="d-flex align-items-baseline px-5">
        <Container className="w-50 m-5 p-5 shadow radius">
          <div className="d-flex align-items-center">
            <div className="me-5">
              <div>
                <h3>{singleService.serviceName}</h3>
                <p className="text-justify mt-3">
                  {singleService.serviceAbout}
                </p>
              </div>
              <Link
                to="/home"
                style={{ color: "#ea3c23", textDecoration: "none" }}
              >
                Back to package offers
              </Link>
            </div>
            <div>
              <img
                class="rounded-circle custom-border"
                width="250"
                height="250"
                src={singleService.serviceImg}
                alt=""
              />
              <div className="text-center mt-4">
                <h1 className="display-4">{singleService.serviceCost}</h1>
                <span>Per Person</span>
                <br />
                <strong>{singleService.serviceTime}</strong>
              </div>
            </div>
          </div>
        </Container>

        <Form
          className="d-flex flex-column w-25 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.displayName}
            {...register("userName")}
          />
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.email}
            {...register("userEmail")}
          />
          {/* Error */}

          {singleService.serviceName && (
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              defaultValue={singleService.serviceName}
              {...register("singleServiceName")}
            />
          )}

          {singleService.serviceImg && (
            <input
              className="mb-3 p-2 d-none"
              defaultValue={singleService.serviceImg}
              {...register("singleServiceImg")}
            />
          )}

          {singleService.serviceCost && (
            <input
              className="mb-3 p-2 d-none"
              defaultValue={singleService.serviceCost}
              {...register("singleServiceCost")}
            />
          )}

          {/* Error */}

          <input
            className="mb-3 p-2 d-none"
            defaultValue="Pending"
            {...register("bookedServiceStatus")}
          />

          <Button variant="danger" type="submit">
            Book Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BookingService;
