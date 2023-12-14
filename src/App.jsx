import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop/Shop'
import { Cart } from './Pages/Cart/Cart'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App