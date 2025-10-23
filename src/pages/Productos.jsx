<<<<<<< HEAD
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export default function Productos({ onAdd, products }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000000);

  
  const filteredProductos = products.filter(
    (p) => p.precio >= minPrice && p.precio <= maxPrice
  );

  return (
    <Container className="my-4">
      <h2 className="page-title">Productos</h2>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <div>
          <label className='rango-precio'>Precio mínimo:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
        <div>
          <label className='rango-precio'>Precio máximo:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredProductos.map((p) => (
          <Col key={p.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={p.imagenes[0]}
                alt={p.nombre}
                style={{ height: "200px", objectFit: "cover", width: "220px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className='titulo-producto'>{p.nombre}</Card.Title>
                  <Card.Text  className='descripcion-pro'>{p.descripcion}</Card.Text>
                </div>
                <div>
                  <h5 className='total'>${p.precio.toLocaleString("es-CL")}</h5>
                  <Button variant="primary" onClick={() => onAdd(p)}>
                    Agregar al carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredProductos.length === 0 && (
        <p className="text-center mt-4 text-muted">
          No hay productos en este rango de precios.
        </p>
      )}
    </Container>
  );
}
=======
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// 🖼️ Importa tus imágenes
import pc2 from '../assets/img/pc2.webp';
import pc1 from '../assets/img/pc1.avif';
import pc3 from '../assets/img/pc3.webp';
import pc4 from '../assets/img/pc4.webp';
import teclado1 from '../assets/img/[20837] TECLADO1 GAMER REDRAGON UCAL K673 (Negro).webp';
import teclado2 from '../assets/img/[20260] TECLADO2 REDRAGON K530W DRACONIC BLC.png';
import tecladob1 from '../assets/img/tecladob1.webp';
import tecladob2 from '../assets/img/tecladob2.webp';
import teclado3 from '../assets/img/[20005] TECLADO GAMER REDRAGON SHIVA K512 RGB (Negro).png';
import mouse1 from '../assets/img/mause1LOGITECH.webp';
import mouse2 from '../assets/img/[20839] MOUSE2 GAMER REDRAGON K1NG 1K M724 (Negro).webp';
import mouse3 from '../assets/img/[20474] MOUSE3 GAMER LOGITECH G203 LIGHTSYNC (Negro).webp';
import silla1 from '../assets/img/SILLA GAMER 5COUGAR TERMINATOR.png';
import silla2 from '../assets/img/[20069] SILLA 2GAMER CORSAIR TC200 (Negro, Cuero sintético).webp';
import silla3 from '../assets/img/[20060] SILLA 1GAMER COUGAR TITAN PRO.png';
import switch2 from '../assets/img/switch22.png';
import ps5 from '../assets/img/ps5.png';
import control1 from '../assets/img/[20790] CONTROL GAME PAD XBOX INALAMBRICO SKY CIPHER .png';
import control2 from '../assets/img/[20792] CONTROL GAME PAD DUALSENSE SONY PS5 INALAMBRICO (Negro).png';
import hyperx from '../assets/img/HyperX_Cloud_Alpha_BlackRed_1_main_M2016147.png';
import mousepad from '../assets/img/mausepad.webp';
import catan from '../assets/img/Made with insMind-catan.png';
import carcassonne from '../assets/img/Carcassonne.png';
import polera from '../assets/img/polera.png';

// 📦 Datos de productos
const productos = [
  { id: 1, nombre: "PC GAMER RDY Y70 TI B04", precio: 2499000, imagenes: [pc2], descripcion: "Intel® Core™ i9-14900KF, MSI PRO Z790-A MAX WiFi", categoria: "PC Gamer" },
  { id: 2, nombre: "PC GAMER RDY Y70 R06", precio: 1499000, imagenes: [pc1], descripcion: "Ryzen™ 9 9950X, ASUS PRIME X870-P WIFI", categoria: "PC Gamer" },
  { id: 3, nombre: "PC GAMER RDY Y70 Liquid Hybrid Max", precio: 2000000, imagenes: [pc3], descripcion: "Intel® Core™ Ultra 9, ASUS ROG STRIX Z890-E WIFI", categoria: "PC Gamer" },
  { id: 4, nombre: "TECLADO GAMER REDRAGON UCAL K673", precio: 62350, imagenes: [teclado1], descripcion: "Keycaps PBT Premium", categoria: "Teclado" },
  { id: 5, nombre: "TECLADO REDRAGON K530W DRACONIC BLC", precio: 70350, imagenes: [teclado2, tecladob1, tecladob2], descripcion: "Keycaps PBT Premium", categoria: "Teclado" },
  { id: 6, nombre: "GAMING MOUSE Logitech G305", precio: 68000, imagenes: [mouse1], descripcion: "Sensor HERO", categoria: "Mouse" },
  { id: 7, nombre: "SILLA GAMER COUGAR TERMINATOR", precio: 265000, imagenes: [silla1], descripcion: "Polipiel Hyper-Dura", categoria: "Silla" },
  { id: 8, nombre: "CONSOLA PS5", precio: 699000, imagenes: [ps5], descripcion: "500 GB, lector Blu-ray 4K", categoria: "Consola" },
  { id: 9, nombre: "CONTROL GAME PAD XBOX", precio: 55000, imagenes: [control1], descripcion: "Inalámbrico Sky Cipher", categoria: "Control" },
  { id: 10, nombre: "POLERA LEVEL-UP-GAMER", precio: 20000, imagenes: [polera], descripcion: "Algodón con serigrafía", categoria: "Ropa" },
];

export default function Productos({ onAdd }) {

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000000);

  const filteredProductos = productos.filter(
    (p) => p.precio >= minPrice && p.precio <= maxPrice
  );

  return (
    <Container className="my-4">
      <h2 className="page-title">Productos</h2>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <div>
          <label className='rango-precio'>Precio mínimo:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
        <div>
          <label className='rango-precio'>Precio máximo:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredProductos.map((p) => (
          <Col key={p.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={p.imagenes[0]}
                alt={p.nombre}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className='titulo-producto'>{p.nombre}</Card.Title>
                  <Card.Text  className='descripcion-pro'>{p.descripcion}</Card.Text>
                </div>
                <div>
                  <h5 className='total'>${p.precio.toLocaleString("es-CL")}</h5>
                  <Button variant="primary" onClick={() => onAdd(p)}>
                    Agregar al carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredProductos.length === 0 && (
        <p className="text-center mt-4 text-muted">
          No hay productos en este rango de precios.
        </p>
      )}
    </Container>
  );
}
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
