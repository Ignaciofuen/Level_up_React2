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

    try {
      setLoading(true);
      await register(form);
      await login(form);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="registro" style={{ textAlign: "center", marginTop: "16px" }}>
        <img src={Image10} alt="Logo empresa" className="login-logo-img" />
      </div>

      <div className="contact-form-container">
        <h2 className="text-center mb-4">Registrarse</h2>
        
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
          </Form.Group>

          <Form.Group className="form-group" controlId="password">
            <Form.Label>Contraseña</Form.Label>
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
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}