import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './LoginCard.css';

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in (e.g., authentication token exists in local storage)
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/users/account/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            // Handle the response accordingly (e.g., show a message, redirect, etc.)
            console.log(data);

            // If login is successful, store the authentication token in local storage
            localStorage.setItem('authToken', data.token);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogout = () => {
        // Clear the authentication token from local storage and update the login state
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    return ( 
        <div className="login__card__container">
            {isLoggedIn ? (
                <div style={{margin:'10rem'}}>
                    <button className="login__button" onClick={handleLogout}>LOGOUT</button>
                </div>
            ) : (
                <div className="login__card">
                    <div className="login__header">
                        <h1>Login</h1>
                    </div>
                    <div className="login__inputs">
                        <div className="email__input__container input__container">
                            <label className="email__label input__label">Email</label>
                            <input 
                                type="email" 
                                className="login__input" 
                                placeholder='example@gmail.com' 
                                value={email} 
                                onChange={handleEmailChange}  
                            />
                        </div>
                        <div className="password__input__container_input__container">
                            <label className="password__label input__label" >Password</label>
                            <input 
                                type="password" 
                                className="login__input" 
                                placeholder='**********' 
                                value={password} 
                                onChange={handlePasswordChange}  
                            />
                        </div>
                        <div className="login__button__container">
                            <button className="login__button" onClick={handleLogin}>LOGIN</button>
                        </div>
                    </div>
                    <div className="login__other__actions">
                        <div className="login__forgot__password">Forgot password?</div>
                        <div className="login__new__account">Don't have an account? <Link to="/account/register">Create account</Link> </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default LoginCard;
