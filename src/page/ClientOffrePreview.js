import { useLocation} from 'react-router-dom';
import React, { useState } from 'react';

export function Preview() {
    // Retrieve the property data passed via the state from the RentalCard
    const location = useLocation();
    const { property } = location.state;
    
    // State to hold the main image URL
    const [mainImage, setMainImage] = useState(property.images[0]);

    // Function to handle thumbnail click
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 p-4">
                        {/* Main Property Image */}
                        <img
                            id="mainImage"
                            src={mainImage} // Set the main image dynamically
                            alt="Main Property Image"
                            className="w-full h-64 md:h-96 object-cover rounded-lg mb-4"
                        />
                        <div className="flex space-x-2 overflow-x-auto">
                            {/* Thumbnail Images */}
                            {property.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded cursor-pointer"
                                    onClick={() => handleThumbnailClick(image)} // Change the main image on click
                                />
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 p-4">
                        <h1 className="text-2xl font-bold mt-2 mb-2">{property.title}</h1>
                        <label className="block text-sm font-bold mb-2 text-gray-700"> Location</label>
                        <p className="text-gray-600 mb-2 ml-3">{property.location}</p>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Description</label>
                        <p className="mb-3 ml-3 text-gray-500 dark:text-gray-400">{property.description}</p>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Genre</label>
                        <div className="text-gray-600 mb-2 ml-3">{property.type}</div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Price</label>
                        <div className="text-3xl font-bold mb-4">
                            {property.price}<span className="text-xl font-normal">/month</span>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="w-[26rem] h-[3rem] bg-green-500 font-serif text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
                                <i className="fas fa-comment-alt h-5 w-5 mr-2"></i> Send WhatsApp Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
