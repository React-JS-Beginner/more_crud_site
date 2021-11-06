import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddNewPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://boiling-anchorage-22873.herokuapp.com/packages", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Package Added Successfully!");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };
  return (
    <div className="pt-5">
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add a new <span style={{ color: "#ea3c23" }}>package</span>
      </h3>

      <Form
        className="d-flex flex-column w-25 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Destination"
          {...register("serviceName")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("serviceImg")}
        />

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="About"
          {...register("serviceAbout")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="$ Cost"
          {...register("serviceCost")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="00:00 Time Validation"
          {...register("serviceTime")}
        />
        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
      <p className="text-center text-white text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default AddNewPackage;
