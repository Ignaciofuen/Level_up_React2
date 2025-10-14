import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// Importaciones de imágenes
import slide1 from '../assets/img/pcss.webp';
import slide2 from '../assets/img/slogan2.png';
import slide3 from '../assets/img/acseso.png'; 
import imagen1 from '../assets/img/Made with insMind-catan.png';
import imagen2 from '../assets/img/pc2.webp';
import imagen3 from '../assets/img/mause1LOGITECH.webp';
import imagen4 from '../assets/img/[20060] SILLA 1GAMER COUGAR TITAN PRO.png';
import imagen5 from '../assets/img/switch22.png';
import imagen6 from '../assets/img/mausepad.webp';
import imagen7 from '../assets/img/polera.png';


export default function Home() {
  return (
    <Container fluid>
      <Row className="contenido">
        <div></div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1} 
              alt="Second slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3} 
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src= {imagen1}alt="PCSS Logo" />
            <Card.Text>JUEGOS DE MESA</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src= {imagen2}alt="PCSS Logo" />
            <Card.Text>COMPUTADORES GAMER</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src={imagen3} alt="PCSS Logo" />
            <Card.Text>ACCESORIOS GAMER</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src={imagen4} alt="PCSS Logo" />
            <Card.Text>SILLAS GAMER</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src={imagen5} alt="PCSS Logo" />
            <Card.Text>CONSOLAS</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src={imagen6} alt="PCSS Logo" />
            <Card.Text>CONSOLAS</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img variant="top" src={imagen7} alt="PCSS Logo" />
            <Card.Text>nuestras poleras y polerones</Card.Text>
            <Button variant="primary">Ver Mas</Button>
          </Card.Body>
        </Card>
        
        
      </Row>
    </Container>
  );
}