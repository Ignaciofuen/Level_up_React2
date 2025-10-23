<<<<<<< HEAD
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'


export default function ProtectedRoute({ children }){
const { user } = useAuth()
if(!user){ return <Navigate to="/login" replace /> }
return children
=======
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'


export default function ProtectedRoute({ children }){
const { user } = useAuth()
if(!user){ return <Navigate to="/login" replace /> }
return children
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
}