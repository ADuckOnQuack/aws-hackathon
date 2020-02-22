import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/test");
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="userName" bsSize="large">
          <ControlLabel>User Name: </ControlLabel>
          <FormControl
            autoFocus
            type="input"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}