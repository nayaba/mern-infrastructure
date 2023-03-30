import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar'

export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  )
}
