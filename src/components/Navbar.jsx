import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authSlice'; // Update the import path
// Navbar.jsx

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Simulate a user login action by dispatching the login action with a user object.
        dispatch(login({ username: 'jhoglu' }));
    };

    const handleLogout = () => {
        // Simulate a user logout action by dispatching the logout action.
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <div className="container">
                <h1>BookLeaf</h1>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Books</Link>
                    </li>
                    <li>
                        <Link to="/user/create">Sign-up</Link>
                    </li>
                    {user ? (
                        <li>
                            <h1>Welcome, {user.username}!</h1>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            {/* <h1>Please log in</h1> */}
                            <Link to="/user/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
