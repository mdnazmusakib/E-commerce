import React, {useState} from 'react'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { IoReorderFour } from "react-icons/io5";


export const Navbar = () => {
    
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };


  return (
    <div className='navbar'>
        <div className='leftSide'id={openLinks?"open":"close"}>
            <img src={logo}></img>
            <div className="hiddenLinks">
            <Link to='/'>Home</Link>
            <Link to='/Shop'>Products</Link>
            <Link to='/Cart'>Carts</Link>
            <Link to='/Login'>Login</Link>
            </div>
        </div>
        <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/Shop'>Products</Link>
          <Link to='/Cart'>Carts</Link>
          <Link to='/Login'>Login</Link>

          <button onClick={toggleNavbar}>
            <IoReorderFour/>
          </button>
        </div>
    </div>
  )
}
