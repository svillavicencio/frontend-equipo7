import React from "react";
import { Form } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Form className="container mt-3">
        <Form.Group
          className="mb-3 col-md-6 col-12 col-12"
          controlId="formBasicEmail"
        >
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group
          className="mb-3 col-md-6 col-12"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    </>
  );
}
