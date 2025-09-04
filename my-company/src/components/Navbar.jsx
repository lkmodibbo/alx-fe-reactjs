import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container' style={{
        display: 'flex',
        justifyContent: 'center', 
        gap: '20px',
        fontSize: '20px',
        padding: '15px',
        borderBottom: '2px solid black',
        position: 'sticky', 
        top: 0,
        backgroundColor: 'white', // 
        zIndex: 1000,
    }}>
        <Link to='/' style={{ 
            textDecoration: 'none', 
            cursor: 'pointer' 
        }}>Home</Link>
        <Link to='/about' style={{ 
            textDecoration: 'none', 
            cursor: 'pointer' 
            }}>About</Link>
        <Link to='/contact' style={{ 
            textDecoration: 'none', 
            cursor: 'pointer' 
            }}>Contact</Link>
        <Link to='/services' style={{ 
            textDecoration: 'none', 
            cursor: 'pointer' 
            }}>Services</Link>
    </nav>
  )
}

export default Navbar
