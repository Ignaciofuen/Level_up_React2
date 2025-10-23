<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { Form, Button, Alert } from 'react-bootstrap';
import Image10 from "../assets/img/slogan2.png";

export default function Register() {
  const { register, login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    
    let role = 'user'; 

    if (form.email === 'usuario@admin.cl') {
      
      if (form.password === 'admin999') {
        role = 'admin';
      } else {
        setError('Contraseña incorrecta para el usuario administrador.');
        return; 
      }
    }
    
    try {
      setLoading(true);

      
      await register({ 
        email: form.email, 
        password: form.password, 
        role: role  
      });
      
 
      await login(form); 

     
      if (role === 'admin') {
        navigate('/login'); 
      } else {
        navigate('/login'); 
      }

     } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo electrónico ya está registrado.');
      } else {
        ('Error al registrar: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

=======
import React from "react";
import { Button, Form } from "react-bootstrap";
import Image10 from "../assets/img/slogan2.png";

function Registro() {
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
  return (
    <>
      <div className="registro" style={{ textAlign: "center", marginTop: "16px" }}>
        <img src={Image10} alt="Logo empresa" className="login-logo-img" />
      </div>

      <div className="contact-form-container">
        <h2 className="text-center mb-4">Registrarse</h2>
<<<<<<< HEAD
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          
          <Form.Group className="form-group" controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              placeholder="Ingresa tu correo" 
              required 
              value={form.email}
              onChange={onChange}
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
              name="password"
              placeholder="Crea una contraseña" 
              required 
              value={form.password}
              onChange={onChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary" type="submit" disabled={loading} className="w-100">
              {loading ? 'Registrando...' : 'Registrarse'}
=======
            <Form.Control type="password" placeholder="Ingrese su contraseña" required />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Registrarse
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

export default Registro;
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
