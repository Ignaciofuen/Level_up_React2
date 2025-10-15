import React from "react";
import { Button, Form } from "react-bootstrap";
import Image9 from "../assets/img/slogan2.png";

function Login() {
  return (
    <>
      <div className="login" style={{ textAlign: "center", marginTop: "16px" }}>
        <img src={Image9} alt="Logo empresa" className="login-logo-img" />
      </div>

      <div className="contact-form-container">
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
        <Form>
          <Form.Group className="form-group" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" required />
          </Form.Group>

          <Form.Group className="form-group" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" required />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
