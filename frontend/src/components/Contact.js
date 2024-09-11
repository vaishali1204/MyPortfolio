import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';  // Assuming this is the correct path for your CSS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/contact', formData); // Ensure the correct port here
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send the message. Please try again.');
        }
    };

    return (
        <div className="contact-section">
            <h2>Let's Connect Together</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
            
            <div className="social-links">
                <h3>Find me on:</h3>
                <ul>
                    <li>
                        <a href="mailto:vaishaliverma1204@gmail.com" target="_blank" rel="noopener noreferrer">
                            Gmail
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vaishali-verma-025125174/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vaishali1204" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Ensure you have a default export
export default Contact;
