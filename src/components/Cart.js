import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Orders from "./Orders";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="position-relative"
      >
        <i className="bi bi-cart4 px-0 mx-0"></i>
        <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
          3
          <span className="visually-hidden">Cart</span>
        </span>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders />
          <div className="text-end mt-3">
            <Button variant="primary">Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
