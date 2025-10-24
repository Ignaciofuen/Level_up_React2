import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';

// Estado inicial de el formulario
const initialFormState = {
  nombre: '',
  precio: 0,
  stock: 0,
};

export default function GestionPro({ products, setProducts }) {
  
  const [newProduct, setNewProduct] = useState(initialFormState);


  const handleAddProduct = (e) => {
    e.preventDefault(); 
    
    //asignamos un nuevo ID al producto dependiendo del maximo id actual
    const maxId = Math.max(...products.map(p => p.id), 0);
    
    const productToAdd = {
      ...newProduct,
      id: maxId + 1, // Asignamos un ID nuevo
      precio: Number(newProduct.precio),
      stock: Number(newProduct.stock),
      imagenes: [], // Los productos nuevos no tendrán imagen
    };

    // Añade el nuevo producto a la lista global
    setProducts(prevProducts => [...prevProducts, productToAdd]);
    
    setNewProduct(initialFormState); // Resetea el formulario
  };


   //Eliminar un producto de la lista
   
  const handleDeleteProduct = (productId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      return;
    }
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };

  // Actualiza el estado 'newProduct' cada vez que el usuario escribe
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container className="mt-5 pt-5" style={{ minHeight: '70vh' }}>
      <div className="panel-container">
      <h2 className="page-title">Gestión de Productos</h2>
      <hr />


      <h4 className="mt-4">Añadir Nuevo Producto</h4>
      <Form onSubmit={handleAddProduct} className="mb-4 p-3 border rounded">
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Group className="form-group" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                value={newProduct.nombre} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control 
                type="number" 
                name="precio" 
                value={newProduct.precio} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control 
                type="number" 
                name="stock" 
                value={newProduct.stock} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={2} className="mt-auto">
              <Button variant="primary" type="submit" className="w-100">
                  + Añadir
              </Button>
          </Col>
        </Row>
      </Form>
      <h4 className="mt-5">Lista de Productos</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio.toLocaleString("es-CL")}</td>
              <td>{product.stock || 0}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </Container>
  );
}

