// File Name: App.js

// Importing React and useState hook for managing state
import React, { useState } from 'react';

// Importing the Login component from the components folder
import Login from './components/login';

// Defining the main App component
const App = () => {
    // State to track the logged-in user
    const [user, setUser] = useState(null);

    // Function to handle login and update user state
    const handleLogin = (username) => {
        setUser(username);
    };

    return (
        <div>
            {/* Conditional rendering: Show welcome message if user is logged in, otherwise show login form */}
            {user ? (
                <div>
                    <h2>Welcome, {user}!</h2>
                    {/* Logout button to clear the user state */}
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

// Exporting the App component as the default export
export default App;
