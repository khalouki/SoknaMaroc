import React, { useState } from 'react';
import signin from '../images/signsvg.svg';
import signup from '../images/signup.svg';
import back from '../images/back.jpg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // to redirect after login/signup
export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // React Router for navigation

    const handleSignUp = async (e) => {
        e.preventDefault();
        // Prepare user credentials
        const name = username;
        const userCredentials = {
            name,
            email,
            password,
        };
        // Show the loading alert
        const loadingAlert = Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we are processing your request.',
            icon: 'info',
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading(); // Show the loading spinner
            }
        });
        try {
            const url = 'http://localhost:8081/registre'; // Replace with actual endpoints
            const method = 'POST'; // POST for both login and signup

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userCredentials),
            });
            const data = await response.json();
            // Close the loading alert
            loadingAlert.close();
            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: data.message,
                    icon: data.ke,
                    confirmButtonText: 'Ok'
                })
            } else {
                Swal.fire({
                    icon: data.ke,
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        // Set session storage and navigate on success
        sessionStorage.setItem("id", "1");  // Assuming data.id is returned from API
        sessionStorage.setItem("name", "Mme Salma li la 3ala9a m3a info"); // Assuming data.username is returned
        sessionStorage.setItem("isLoggedIn", true);
        // Set the session variable for showing the modal
        sessionStorage.setItem("showModal", true);
        navigate("/");
       /* // Prepare user credentials
        const formData = new FormData();
        formData.append('emailuser', email);
        formData.append('passuser', password);
        // Show the loading alert
        const loadingAlert = Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we are processing your request.',
            icon: 'info',
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading(); // Show the loading spinner
            }
        });
        try {
            const url = 'http://localhost:8081/logreact'; // Replace with actual endpoint
            const method = 'POST'; // POST for both login and signup
            const response = await fetch(url, {
                method,
                body: formData,
            });
            if (!response.ok) {
                const data = await response.json();
                // Close the loading alert before showing an error
                loadingAlert.close();
                console.error(data.message, response.status)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                return;
            }
            const data = await response.json();
            // Close the loading alert after the request
            loadingAlert.close();
            // Set session storage and navigate on success
            sessionStorage.setItem("id", data.id);  // Assuming data.id is returned from API
            sessionStorage.setItem("name", data.username); // Assuming data.username is returned
            sessionStorage.setItem("isLoggedIn", true);
            // Set the session variable for showing the modal
            sessionStorage.setItem("showModal", true);
            navigate("/"); // Redirect to home or dashboard page
        } catch (error) {
            // Close the loading alert in case of an error
            loadingAlert.close();
            console.error('Error during authentication:', error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An unexpected error occurred. Please try again later.",
            });
        }*/
    };


    return (
        <div
            style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="flex h-screen"
        >
            {/* Left side - Illustration */}
            <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-12">
                <div className="text-center">
                    {/* Title with transition */}
                    <h1
                        className="text-4xl font-bold text-white mb-4 transition-all duration-500 ease-in-out"
                        style={{
                            transform: isSignUp ? 'translateX(0)' : 'translateX(-50px)',

                        }}
                    >
                        {isSignUp ? 'Create an Account to Explore' : 'Log In and Explore'}
                    </h1>

                    {/* Description with transition */}
                    <p
                        className="text-xl text-blue-200 mb-8 transition-all duration-500 ease-in-out"
                        style={{
                            transform: isSignUp ? 'translateX(0)' : 'translateX(50px)',
                            opacity: isSignUp ? 1 : 0.5,
                        }}
                    >
                        Find your perfect rental property
                    </p>

                    {/* Image with transition */}
                    <img
                        src={isSignUp ? signin : signup}
                        alt="Real Estate Illustration"
                        className="w-400 h-400 mx-auto transition-all duration-500 ease-in-out"
                        style={{
                            transform: isSignUp ? 'scale(1)' : 'scale(0.95)',
                            opacity: isSignUp ? 1 : 0.8,
                        }}
                    />
                </div>
            </div>
            {/* Right side - Auth Form */}
            <div className="w-full bg-auth md:w-1/2 flex items-center justify-center p-8 bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center text-black-600">
                        {isSignUp ? 'Create an Account' : 'Sign In'}
                    </h2>
                    {/**   Authentification Form */}
                    <form onSubmit={handleSignIn} className={`space-y-4 ${isSignUp ? 'hidden' : ''}`}>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out"
                                placeholder="your@email.com"
                            />
                        </div>
                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out"
                                placeholder="••••••••"
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-black font-bold text-white py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
                        >
                            Sign In
                        </button>

                    </form>
                    {/**   Inscription Form */}
                    <form onSubmit={handleSignUp} className={`space-y-4 ${isSignUp ? '' : 'hidden'}`}>
                        {/* Username Field */}
                        <div>
                            <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
                                UserName
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out"
                                placeholder="Your Name"
                            />
                        </div>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out"
                                placeholder="your@email.com"
                            />
                        </div>
                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 ease-in-out"
                                placeholder="••••••••"
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-black font-bold text-white py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>


                    </form>
                    {/* Switch between Sign Up and Sign In */}
                    <p className="mt-4 text-center text-gray-600">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="ml-1 text-blue-600 hover:underline focus:outline-none"
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
