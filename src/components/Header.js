import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='banner'>
        <Navbar/>
        <div className="baneer__content">
            <div className='container'>
                <div className="baneer__text">
                <h3>Pizza Delivery</h3>
                <h1>MAESTRO  PIZINNI</h1>
                <p>This is a random text added to the website in a p tag.This is a food website</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Header