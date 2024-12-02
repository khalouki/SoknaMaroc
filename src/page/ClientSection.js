import React, { useState, useEffect } from 'react';
import '../css/etude.css';  // Import the CSS file for this component
import Pagination from '../Components/Pagination';
import ClientSectionOffre from '../Components/ClientSectionOffre'
import WelcomeModal from '../Components/WelcomeModal';
// MainContent Component
export function ClientSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 3;  // Show 3 properties per page
    const [openFilter, setOpenFilter] = useState(false);
    const [username, setUsername] = useState('');
    const [showModal, setShowModal] = useState(false);
    const rentalProperties = [
        {
            id: 1,
            title: "Spacious Downtown Apartment",
            price: 1500,
            location: "123 Main St, Cityville",
            type: "all",
            images: [
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
                "https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg",
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
            ],
        },
        {
            id: 2,
            title: "Cozy Studio in Tech District",
            price: 1000,
            location: "456 Innovation Ave, Techville",
            type: "Female",
            description: "nice house for female maximaum 3 girl it have 3 room and one bath",
            images: [
                "https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg",
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
            ],
        },
        {
            id: 3,
            title: "Luxury Penthouse with City View",
            price: 3000,
            location: "789 Skyline Blvd, Metropolis",
            type: "Male",
            description: "nice house for female maximaum 3 girl it have 3 room and one bath",
            images: [
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
                "https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg",
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
            ],
        },
        {
            id: 4,
            title: "Modern Studio in Central Park",
            price: 1200,
            location: "101 Park Ave, Cityville",
            type: "Female",
            description: "nice house for female maximaum 3 girl it have 3 room and one bath",
            images: [
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
                "https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg",
                "https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg",
            ],
        },
        {
            id: 5,
            title: "Charming House Near the Beach",
            price: 2500,
            location: "32 Ocean Ave, Seaside",
            type: "Female",
            description: "nice house for female maximaum 3 girl it have 3 room and one bath",
            images: [
                "https://v0.dev/placeholder.svg?height=400&width=600&text=House+1",
                "https://v0.dev/placeholder.svg?height=400&width=600&text=House+2",
                "https://v0.dev/placeholder.svg?height=400&width=600&text=House+3",
            ],
        },
    ];
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = () => {
        const pageLanguage = document.documentElement.lang;
        alert("Walo Ba9a 5awya");
    };
    const handleOpenFilter = () => {
        setOpenFilter(prevState => !prevState); // Toggle the menu open/close
    };
    // Pagination Logic
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = rentalProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const totalPages = Math.ceil(rentalProperties.length / propertiesPerPage);

    const handlePageChange = (page) => {
        setIsLoading(true);
        setCurrentPage(page);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        // Check if the user is logged in
        if (sessionStorage.getItem("isLoggedIn")) {
            const storedUsername = sessionStorage.getItem("name");
            setUsername(storedUsername);

            // Check if the modal should be displayed (session variable exists)
            if (sessionStorage.getItem("showModal") === "true") {
                setShowModal(true); // Show the modal
            }
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
        sessionStorage.removeItem("showModal"); // Remove session variable after modal is shown
    };

    return (
        <main className="pb-12 relative">
            {/* The modal will show after successful login */}
            {showModal && (
                <WelcomeModal
                    onClose={closeModal} // Close the modal when the user clicks close
                    username={username}
                />
            )}
            {/* Header Section */}
            <div className="sm:px-14 px-4 pt-12 pb-3 text-center bg-gradiant-p">
                <h1 className="ml10 text-6xl font-bold text-white">
                    <span className="text-wrapper">
                        <span className="letters">Your Next House Awaits</span>
                    </span>
                </h1>
                <p className=' text-1xl text-white mb-8'>Discover the perfect property in your ideal location</p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter city, neighborhood, or address"
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <i className="fas fa-map-marker-alt absolute left-3 top-2.5 text-gray-400"></i>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-50"
                            onClick={handleOpenFilter}
                            aria-expanded={openFilter ? "true" : "false"}
                        >
                            <i className="fas fa-sliders-h h-5 w-5 mr-2"></i>
                            Filters
                        </button>
                        <button
                            onClick={handleSearch}
                            className="bg-black text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                        >
                            <i className="fas fa-search h-5 w-5 mr-2"></i>
                            Search
                        </button>
                    </div>

                    {/** Filter section with transition */}
                    <div
                        className={`flex flex-col md:flex-row gap-4  transition-all duration-500 ease-in-out transform ${openFilter ? 'max-h-screen opacity-100 mt-4 ' : 'max-h-0 opacity-0 mt-0'}`}>
                        <div className='w-full'>
                            <input
                                type="text"
                                className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Price"
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <select
                                id="sex"
                                className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                <option selected>Choose a Genre</option>
                                <option value="US">Homme</option>
                                <option value="CA">Femme</option>
                                <option>Familly</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <select
                                id="countries"
                                className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                                <option selected>Choose a type</option>
                                <option value="US">Room</option>
                                <option value="CA">House</option>
                                <option value="FR">Studio</option>
                                <option value="DE">Garage</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <input
                                type="text"
                                className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Stage"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 relative">
                {/* Show spinner when loading */}
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div
                        className={`rental-grid mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        {currentProperties.map((property) => (
                            <ClientSectionOffre key={property.id} property={property} />
                        ))}
                    </div>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    );
}
