import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoFacebook } from 'react-icons/io5'
import { IoLogoTwitch } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import '../Styles/Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <IoLogoInstagram /> <IoLogoFacebook /> <IoLogoTwitch /> <IoLogoLinkedin />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, nesciunt.</p>
        <p>&copy; 2023 sorryiiuc.com</p>
    </div>
  )
}
