import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop/Shop'
import { Cart } from './Pages/Cart/Cart'
import { ShopContextProvider } from './Context/shop-context'
import { About } from './Pages/About'


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App