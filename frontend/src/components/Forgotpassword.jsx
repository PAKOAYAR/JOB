// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/forgot-password', { email });
            alert('Reset link sent to your email');
        } catch (error) {
            alert('Error sending reset link');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
            />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;