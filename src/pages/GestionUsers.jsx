import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';

const initialFormState = {
    nombre: '',
    email: '',
    role: 'user',
};

export default function GestionUsers({ users: propUsers, setUsers: propSetUsers }) {
    // Soporta recibir `users` y `setUsers` desde un padre; si no se pasan, usa estado local
    const [localUsers, setLocalUsers] = useState(propUsers || []);
    const users = propUsers ?? localUsers;
    const setUsers = propSetUsers ?? setLocalUsers;

    const [newUser, setNewUser] = useState(initialFormState);

    const handleAddUser = (e) => {
        e.preventDefault();
        const maxId = users.length ? Math.max(...users.map(u => u.id)) : 0;
        const userToAdd = {
            ...newUser,
            id: maxId + 1,
        };
        setUsers(prev => [...prev, userToAdd]);
        setNewUser(initialFormState);
    };

    const handleDeleteUser = (userId) => {
        if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;
        setUsers(prev => prev.filter(u => u.id !== userId));
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Container className="mt-5 pt-5" style={{ minHeight: '70vh' }}>
            <div className="panel-container">
                <h2 className="page-title">Gestión de Usuarios</h2>
                <hr />

                <h4 className="page-title">Añadir Nuevo Usuario</h4>
                <Form onSubmit={handleAddUser} className="mb-4 p-3 border rounded">
                    <Row className="align-items-end">
                        <Col md={3}>
                            <Form.Group className="form-group" controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={newUser.nombre}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label >Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Rol</Form.Label>
                                <Form.Select name="role" value={newUser.role} onChange={handleFormChange}>
                                    <option value="user">Usuario</option>
                                    <option value="admin">Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={2} className="mt-auto">
                            <Button variant="primary" type="submit" className="w-100">
                                + Añadir
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <h4 className="page-title">Lista de Usuarios</h4>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length ? users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={5} className="text-center">No hay usuarios</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}