import React from 'react'

const Home = () => {
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
        }}>Welcome to Our Company</h1>
      <p style={{
        fontSize: '28px',
        color: 'gray'
      }}>We are dedicated to delivering excellence in all our services</p>
    </div>
  )
}

export default Home