// File Name: login.js

import React, { useState } from 'react';

// Define the Login component and accept onLogin as a prop
const Login = ({ onLogin }) => {
    // State variables for username, password, and error messages
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Basic validation to check if username and password are provided
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        // Simulate authentication logic (replace with real authentication in a production app)
        if (username === 'admin' && password === 'password') {
            onLogin(username); // Call the onLogin function passed as a prop
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {/* Display error message if there is one */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {/* Login form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
