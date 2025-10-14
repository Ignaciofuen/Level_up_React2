import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './auth/AuthContext'
import Home from './pages/Home'
import Carrito from './pages/carrito'
import Productos from './pages/Productos'
import AppNavbar from './components/AppNavbar'
import Footer from './components/footer'
import './App.css'
import './styles/custom.css';



export default function App(){
const [carrito, setCarrito] = useState([])


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
<Route path="/Productos" element={<Productos onAdd={addToCart} />} />
<Route path="/carrito" element={
/*<ProtectedRoute>*/
<Carrito items={carrito} onRemove={removeFromCart} onClear={clearCart} />
/*</ProtectedRoute>*/
} />
</Routes>
<Footer/>
</Router>
</AuthProvider> 
)

}
