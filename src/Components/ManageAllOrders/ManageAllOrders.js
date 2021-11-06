import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  // const [status, setStatus] = useState("");
  const [status, setStatus] = useState("Approved");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://boiling-anchorage-22873.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);

  //Update Status
  const handleUpdate = (id) => {
    setStatus(status);
    fetch(`https://boiling-anchorage-22873.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          setReload(!reload);
        }
      });
  };

  //Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`https://boiling-anchorage-22873.herokuapp.com/allorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container className="my-5 pb-5">
      <h3 className="text-center text-dark mb-2 text-uppercase">
        manage all <span style={{ color: "#ea3c23" }}>Orders</span>
      </h3>
      <p className="fs-4 text-center text-dark mb-5 text-uppercase">
        total <strong style={{ color: "#ea3c23" }}>{orders.length}</strong>{" "}
        orders
      </p>
      <Row className="g-4">
        {orders.map((order) => (
          <Col key={order._id} xl={3} lg={3}>
            <Card>
              <Card.Img variant="top" src={order.singleServiceImg} />
              <Card.Body className="text-center">
                <Card.Title>
                  {" "}
                  <span style={{ color: "#ea3c23" }}>
                    {order.singleServiceName}
                  </span>{" "}
                </Card.Title>
                <span className="fs-3">{order.singleServiceCost}</span>
                <Card.Text>
                  BOOKED BY <br /> <i className="fas fa-user"></i>{" "}
                  {order.userName}{" "}
                </Card.Text>
                {/* Button */}
                <div className="d-flex">
                  <Button
                    className="text-center btn-success me-1 w-50"
                    size="sm"
                    onClick={() => handleUpdate(order._id)}
                  >
                    Approve
                  </Button>

                  <Button
                    onClick={() => deleteHandler(order._id)}
                    className="text-center btn-danger ms-1 w-50"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
                {/* Button */}
              </Card.Body>
              <Card.Footer
                // style={{ backgroundColor: "#e0e0eb" }}
                // style={{ backgroundColor: "#98AFC7" }}
                className="text-center bg-white"
              >
                <small className="text-dark">{order.bookedServiceStatus}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllOrders;
