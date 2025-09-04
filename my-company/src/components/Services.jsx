import React from 'react'

const Services = () => {
  return (
    <div style={{
            padding: '20px',
            margin: '0 auto',
            justifyContent: 'center',
        }}>
        <h1 style={{
            padding: '20px',
            margin: '0 auto',
            justifyContent: 'center',
        }}>Our Services</h1>
         <ul style={{
            listStyle: 'none',
            padding: '10px',
            margin: '10px',
         }}>
           <li style={{
            gap: '10px',
            textDecoration: 'none',
         }}>Technology Consulting</li>
           <li style={{
            textDecoration: 'none',
         }}>Market Analysis</li>
           <li style={{
            textDecoration: 'none',
         }}>Product Development</li>
         </ul>
    </div>
  )
}

export default Services