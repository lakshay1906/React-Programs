import React from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-60 bg-slate-600 text-white flex flex-col justify-around items-center'>
        <div className='flex gap-20 text-xl'>
        <FaTwitter/>
        <FaInstagram/>
        <FaFacebook/>
        </div>
        <h1 className='text-4xl font-bold'>Contact Me</h1>
        <h2 className='text-2xl'>gourav@gmail.com</h2>
        <p>Copyrights are reserved. This template is designed by Gourav</p>

    </div>
  )
}

export default Footer