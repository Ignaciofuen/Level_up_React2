<<<<<<< HEAD
import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image9 from "../assets/img/slogan2.png";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    try {
      setLoading(true);
      const loggedInUser = await login({email,password});

      if (loggedInUser.role === 'admin'){
        navigate('/AdminHome');
      }else{
          navigate('/')
      }
      
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false);
    }
  };

=======
import React from "react";
import { Button, Form } from "react-bootstrap";
import Image9 from "../assets/img/slogan2.png";

function Login() {
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
  return (
    <>
      <div className="login" style={{ textAlign: "center", marginTop: "16px" }}>
        <img src={Image9} alt="Logo empresa" className="login-logo-img" />
      </div>

      <div className="contact-form-container">
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
<<<<<<< HEAD
        
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
=======
        <Form>
          <Form.Group className="form-group" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" required />
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
          </Form.Group>

          <Form.Group className="form-group" controlId="password">
            <Form.Label>Contraseña</Form.Label>
<<<<<<< HEAD
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button type="submit" disabled={loading} className="w-100">
              {loading ? 'Ingresando…' : 'Iniciar Sesión'}
=======
            <Form.Control type="password" placeholder="Ingrese su contraseña" required />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Iniciar Sesión
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}

export default Login;
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
