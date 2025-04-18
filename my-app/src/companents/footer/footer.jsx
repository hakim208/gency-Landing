import React from 'react'
import "./footer.css"

const Footer = ({ img }) => {
  return (
    <div className='footer'>
      <img src={img} alt="" />
      <div className="boxText">
        <p>About</p>
        <p>Services</p>
        <p>Client</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <p className='tri'>≡</p>
    </div>
  )
}

export default Footer
