import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handles changes in input/textarea
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
    console.log(formData); // just to check data
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
    }}>
      <h1 style={{ marginBottom: "20px", color: "navy" }}>Contact Us</h1>
      
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        borderRadius: "8px",
      }}>
        <input 
          type="text" 
          name="name"   // ✅ added name
          placeholder="Your name" 
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        />
        <input 
          type="email" 
          name="email"  // ✅ added name
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        />
        <textarea 
          name="message"   // ✅ added name
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        />
        <button 
          type="submit"
          style={{
            backgroundColor: "navy",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact;
