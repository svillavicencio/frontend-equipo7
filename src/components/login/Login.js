import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signInApi } from "../../api/authApi";
import { config } from "../../config/index";

import "./Login.scss";
export default function Login() {
  const [inputs, setInputs] = useState({
    userFile: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    const result = await signInApi(inputs);
    if (result.code !== 200) {
      console.log(result);
    } else {
      const user = JSON.stringify(result.message);
      localStorage.setItem(config.ACCESS_TOKEN, user);
      localStorage.setItem(config.REFRESH_TOKEN, user);
      window.location.href = "/home";
    }
  };

  return (
    <div className="container mt-3">
      <Form autoComplete="off" onSubmit={login} className="login">
        <Form.Group className="login_input" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            defaultValue={inputs.userFile}
            onChange={(e) => setInputs({ ...inputs, userFile: e.target.value })}
            name="userFile"
            type="text"
            placeholder="Enter UXXXXX"
          />
        </Form.Group>

        <Form.Group className="login_input" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            defaultValue={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="login_check" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Group className="login_input">
          <Button type="submit" className="login_input_btn">
            Ingresar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
