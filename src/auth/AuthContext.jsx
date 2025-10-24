import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

const USERS_KEY = 'tg_users'
const SESSION_KEY = 'tg_session'

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(SESSION_KEY)
    if(raw){ setUser(JSON.parse(raw)) }
  }, [])

  const getUsers = () => {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? JSON.parse(raw) : []
  }

  const saveUsers = (list) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(list))
  }

  const register = ({ email, password , role }) => {
    const users = getUsers()
   
    const exists = users.some(u => u && u.email && u.email.toLowerCase() === email.toLowerCase());
    if(exists){ throw new Error('Este correo electrónico ya está en uso.') }
    
    const newUser = { id: crypto.randomUUID(), email, password , role}
    users.push(newUser)
    saveUsers(users)
    return { id: newUser.id, email,role }
  }

  const login = ({ email, password}) => {
    const users = getUsers()
    const match = users.find(u => u.email === email && u.password === password)
    if(!match){ throw new Error('Correo o contraseña inválidos.') }
    
    
    const sessionUser = { id: match.id, email: match.email, role: match.role }
    setUser(sessionUser)
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
    return sessionUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(SESSION_KEY)
  }

  const value = { user, register, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}