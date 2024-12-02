import React, { useState } from "react";
import Pagination from '../Components/Pagination';
import AdminSectionOffre from "../Components/AdminSectionOffre";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: 'Cozy Apartment',
            location: 'Downtown',
            price: 1000,
            dateAdded: '2023-05-15',
            description: 'A lovely cozy apartment in the heart of downtown.',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg',
            images: ['https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg', 'https://v0.dev/placeholder.svg?height=400&width=600&text=Apartment+1'],
        },
        {
            id: 2,
            title: 'Spacious House',
            location: 'Suburbs',
            price: 1500,
            dateAdded: '2023-05-14',
            description: 'A large family home with a beautiful garden.',
            thumbnail: 'https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg',
            images: ['https://st4.depositphotos.com/1009647/27204/i/450/depositphotos_272041202-stock-photo-modern-living-interior-design.jpg', 'https://v0.dev/placeholder.svg?height=400&width=600&text=Apartment+1', 'https://v0.dev/placeholder.svg?height=400&width=600&text=Apartment+1'],
        },
        {
            id: 3,
            title: 'Studio in City Center',
            location: 'City Center',
            price: 800,
            dateAdded: '2023-05-13',
            description: 'Modern studio apartment, perfect for young professionals.',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/97/04/91/360_F_597049195_1k0NgwkWBbLVEPNuL5ceBoKm70etfgOs.jpg',
            images: ['https://v0.dev/placeholder.svg?height=400&width=600&text=Apartment+1'],
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const OffrePerPage = 3;
    // Pagination Logic
    const indexOfLastOffre = currentPage * OffrePerPage;
    const indexOfFirstOffre = indexOfLastOffre - OffrePerPage;
    const currentOffre = offers.slice(indexOfFirstOffre, indexOfLastOffre);
    const totalPages = Math.ceil(offers.length / OffrePerPage);

    const handlePageChange = (page) => {
        setIsLoading(true);
        setCurrentPage(page);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    const navigate = useNavigate();
    const handleAddOffre = () => {
        navigate(`/Dashboard/Add`, { state: {} });
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };
    return (
        <main className="pb-12 relative">
           {/* Add Button */}
            <button
                onClick={handleAddOffre}
                className="z-50 fixed bottom-8 right-8 w-16 h-16 bg-blue-500 text-white text-4xl rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
            >
                +
            </button>
            {/* Header Section */}
            <div className="sm:px-14 px-4  pt-12  pb-12 text-center bg-gradiant-b">
                <h1 className="text-6xl font-bold text-white">Offer Manager Dashbord</h1>
                <p className=' text-1xl text-white mb-8'>Discover And Edit All Your Offer</p>
            </div>
            {/* Content Section */}
            <div className='max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8  relative'>
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentOffre.map(offer => (
                            <AdminSectionOffre
                                key={offer.id}
                                offer={offer}
                            />
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
};

export default AdminDashboard;
