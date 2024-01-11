// Enhanced Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.name) {
            formIsValid = false;
            errors['name'] = 'Name is required';
        }
        if (!formData.email) {
            formIsValid = false;
            errors['email'] = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors['email'] = 'Email format is invalid';
        }
        if (!formData.message) {
            formIsValid = false;
            errors['message'] = 'Message is required';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            // Handle form submission here
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
