import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css'; // Import the CSS file for the Contact form

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
            await axios.post('/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('There was an error sending the message', error);
            alert('Failed to send message, please try again later.');
        }
    };

    return (
        <div className="contact-form">
            <h2>Let's Connect Together</h2>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default Contact;
