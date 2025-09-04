import React from 'react'

const About = () => {
  return (
    <div style={{
         display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        padding: '20px'
    }}>
         <h1 style={{
            fontSize: '32px',
            color: '#333',
        }}>About Us</h1>
         <p style={{
            fontSize: '32px',
            color: '#333',
        }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  )
}

export default About