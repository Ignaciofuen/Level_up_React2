import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './auth/AuthContext'
import Home from './pages/Home'
import Carrito from './pages/carrito'
import Productos from './pages/Productos'
import Contacto from './pages/contacto'
import Nosotros from './pages/nosotros'
import Login from './pages/login'
import Registro from './pages/registro'
import AdminHome from './pages/adminHome'
import GestionPro from './pages/GestionPro'
import AppNavbar from './components/AppNavbar'
import Footer from './components/footer'
import './App.css'
import './styles/custom.css';




import pc2 from './assets/img/pc2.webp';
import pc1 from './assets/img/pc1.avif';
import pc3 from './assets/img/pc3.webp';
import teclado1 from './assets/img/[20837] TECLADO1 GAMER REDRAGON UCAL K673 (Negro).webp';
import teclado2 from './assets/img/[20260] TECLADO2 REDRAGON K530W DRACONIC BLC.png';
import tecladob1 from './assets/img/tecladob1.webp';
import tecladob2 from './assets/img/tecladob2.webp';
import mouse1 from './assets/img/mause1LOGITECH.webp';
import silla1 from './assets/img/SILLA GAMER 5COUGAR TERMINATOR.png';
import ps5 from './assets/img/ps5.png';
import control1 from './assets/img/[20790] CONTROL GAME PAD XBOX INALAMBRICO SKY CIPHER .png';
import polera from './assets/img/polera.png';


const productosIniciales = [
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













export default function App(){
const [carrito, setCarrito] = useState([])
const [products, setProducts] = useState(productosIniciales); 

// Persistir carrito opcionalmente
useEffect(() => {
const raw = localStorage.getItem('tg_cart')
if(raw){ setCarrito(JSON.parse(raw)) }
}, [])


useEffect(() => {
localStorage.setItem('tg_cart', JSON.stringify(carrito))
}, [carrito])


const addToCart = (item) => setCarrito(prev => [...prev, item])
const removeFromCart = (index) => setCarrito(prev => prev.filter((_, i) => i !== index))
const clearCart = () => setCarrito([])




return (
<AuthProvider>
<Router>
<AppNavbar  cartItems={carrito} />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Productos" element={<Productos onAdd={addToCart}products={products} />} />
<Route path="/carrito" element={
<ProtectedRoute>
<Carrito items={carrito} onRemove={removeFromCart} onClear={clearCart} />
</ProtectedRoute>
} />
<Route path="/contacto" element={<Contacto />} />
<Route path="/nosotros" element={<Nosotros />} />
<Route path="/login" element={<Login />} />
<Route path="/registro" element={<Registro />} />
<Route path="/AdminHome" element={<AdminHome/>} />
<Route path="/GestionPro" element={<GestionPro products={products} setProducts={setProducts} />} />
</Routes>
<Footer/>
</Router>
</AuthProvider> 
)

}
