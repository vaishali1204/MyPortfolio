const Contact = require('../models/contactModel');

exports.sendContactMessage = async (req, res) => {
    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.json({ message: 'Message received, we will get back to you shortly!' });
};
