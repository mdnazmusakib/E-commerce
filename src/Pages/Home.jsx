import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/homePic1.jpg'
import '../Styles/Home.css'

export const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1>E-Shop</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link to="/Shop">
                <button>Visit Shop</button>
            </Link>
        </div>
    </div>
  )
}
