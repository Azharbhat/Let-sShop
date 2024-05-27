import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import './RegisterCard.css';

const RegisterCard = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // State to track user registration status
    const [isRegistered, setIsRegistered] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send registration data to the backend
            const response = await axios.post("http://localhost:3000/api/users/account/register", formData);
            console.log(response.data); // Log response from the server

            // Clear form fields after successful registration
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });

            // Set registration status to true after successful registration
            setIsRegistered(true);
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    // Function to handle input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Function to handle user logout
    const handleLogout = () => {
        // Logic to handle user logout
        setIsRegistered(false); // Update registration status to false
    };

    // If the user is already registered, render the logout button
    if (isRegistered) {
        return (
            <div>
                <h1>User is already registered</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    // Render the registration form if the user is not registered
    return ( 
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                    <form onSubmit={handleSubmit}>
                        <div className="fname__input__container reg__input__container">
                            <label className="fname__label input__label">First name</label>
                            <input 
                                type="text" 
                                className="fname__input register__input" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                placeholder="Enter your first name" // Placeholder text
                                required // Required field
                            />
                        </div>
                        <div className="lname__input__container reg__input__container">
                            <label className="lname__label input__label">Last name</label>
                            <input 
                                type="text" 
                                className="lname__input register__input" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                placeholder="Enter your last name" // Placeholder text
                                required // Required field
                            />
                        </div>
                        <div className="email__input__container reg__input__container">
                            <label className="email__label input__label">Email</label>
                            <input 
                                type="email" 
                                className="email__input register__input" 
                                placeholder='example@gmail.com' 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required // Required field
                            />
                        </div>
                        <div className="password__input__container reg__input__container">
                            <label className="password__label input__label">Password</label>
                            <input 
                                type="password" 
                                className="password__input register__input" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                placeholder="Enter your password" // Placeholder text
                                required // Required field
                            />
                        </div>
                        <div className="register__button__container">
                            <button type="submit" className="register__button">Create Account</button>
                        </div>
                    </form>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">
                        Already have an account? <Link to="/account/login">Login</Link> <br /> 
                        <Link to="/account/CreateAdmin">Admin Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default RegisterCard;
