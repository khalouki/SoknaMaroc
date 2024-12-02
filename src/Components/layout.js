import { useState } from "react";
import { Link } from "react-router-dom";
import Logo_icone from '../images/Logo_icone.png';
import photo_cv from '../images/photo_cv.png';
export function Footer() {
    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className=" border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2023 Abdelkhalk essaid, SoknaMaroc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        setOpenMenu(prevState => !prevState); // Toggle the menu open/close
    };
    const logout=()=>{
        sessionStorage.removeItem("name")
        sessionStorage.setItem("isLoggedIn",false)
        window.location.reload();
    }
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo and Brand Name */}
                <div className="flex items-center space-x-2">
                    <img src={Logo_icone} alt="Logo"
                        className="w-16 h-16 object-contain rounded-full"
                    />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">SoknaMaroc</span>
                </div>
                {/* User Menu */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                    {/**  Get Started Button */}
                    <div className="flex items-center lg:order-2">
                        {/* Check if the user is logged in */}
                        {sessionStorage.getItem("isLoggedIn") === "false" ? (
                        <div className="flex justify-center">
                            <button
                                className="w-full text-white  bg-black font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                            <Link to="/login">Get Started</Link>
                            </button>
                        </div>
                        ) : (
                            <>
                                {/* Menu Button */}
                                <button
                                    type="button"
                                    onClick={handleOpenMenu}
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded={openMenu ? "true" : "false"}
                                    aria-haspopup="true"
                                    id="user-menu-button"
                                >
                                    <img
                                        src={photo_cv}
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute right-0 top-full mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow z-50 ${openMenu ? '' : 'hidden'}`}
                                    id="user-dropdown"
                                    role="menu"
                                >
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900">Abdelkhalk essaid</span>
                                        <span className="block text-sm text-gray-500 truncate">Abdelkhalk@gmail.com</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li onClick={handleOpenMenu}>
                                            <Link to="/">
                                                <p className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                                                    Page Accueil
                                                </p>
                                            </Link>
                                        </li>
                                        <li onClick={handleOpenMenu}>
                                            <Link to="/Profile">
                                                <p className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                                                    Your Profile
                                                </p>
                                            </Link>
                                        </li>
                                        <li onClick={handleOpenMenu}>
                                            <Link to="/Dashboard">
                                                <p className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                                                    Dashboard
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <p className="block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">
                                                <button
                                                onClick={logout} 
                                                >
                                                    Logout
                                                </button>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
}

export function Notfound() {
    return (
        <section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to={"/"}>
                        <a class="inline-flex text-black bg-primary-600 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 border-2 border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300">
                            Back to Homepage
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}