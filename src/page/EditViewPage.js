import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditViewPage() {
    const location = useLocation();
    const navigate = useNavigate();
    // Get offer data from location state
    const { offer } = location.state;

    // Determine if it's edit or add mode based on whether offer exists
    const isEditMode = offer && offer.id;

    // Set initial state either from the offer data (if editing) or default empty data (if adding)
    const [title, setTitle] = useState(isEditMode ? offer.title : '');
    const [locationInput, setLocationInput] = useState(isEditMode ? offer.location : '');
    const [price, setPrice] = useState(isEditMode ? offer.price : '');
    const [description, setDescription] = useState(isEditMode ? offer.description : '');

    const [mainImage, setMainImage] = useState(isEditMode ? offer.images[0] : '');
    const [images, setImages] = useState(isEditMode ? offer.images : Array(4).fill('')); // Initialize with empty images array if adding

    const handleImageChange = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const handleImageUpload = (event, index) => {
        const newImage = URL.createObjectURL(event.target.files[0]);
        const updatedImages = [...images];
        updatedImages[index] = newImage; // Replace the image at the given index
        setImages(updatedImages);
        if (index === 0) {
            setMainImage(newImage); // Update main image if the first thumbnail is uploaded
        }
    };

    const handleSaveChanges = () => {
        // Handle save logic for both edit and add mode
        if (isEditMode) {
            alert("Offer with id " + offer.id + " has been updated");
        } else {
            alert("A new offer has been added");
        }
        // Optional: Navigate back to the admin page or list
        navigate('/Dashboard'); // You can change this to the appropriate page
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 p-4">
                        {/* Main Image */}
                        <div className="relative group">
                            <img
                                id="mainImage"
                                src={mainImage || '/path/to/placeholder-image.jpg'} // Use placeholder if no image is set
                                alt="Main offer Image"
                                className="w-full h-64 md:h-96 object-cover rounded-lg mb-4"
                            />
                            {/* Upload Button */}
                            <label className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const newMainImage = URL.createObjectURL(e.target.files[0]);
                                        setMainImage(newMainImage);
                                    }}
                                />
                                <span className="text-white">Change Image</span>
                            </label>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex space-x-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={image || '/path/to/placeholder-image.jpg'} // Use placeholder if no image is set
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-20 h-20 object-cover rounded cursor-pointer thumbnail ${mainImage === image ? 'active' : ''}`}
                                        onClick={() => handleImageChange(image)}
                                    />
                                    {/* Upload Button */}
                                    <label className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageUpload(e, index)}
                                        />
                                        <span className="text-white">Change</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 p-4">
                        {/* Editable Inputs for offer Details */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-black">Title</label>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder="Enter title"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>

                        {/* Location Input */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-black">Location</label>
                            <input
                                type="text"
                                onChange={(e) => setLocationInput(e.target.value)}
                                value={locationInput}
                                placeholder="Enter location"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>

                        {/* Description Input */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-black">Description</label>
                            <textarea
                                rows="4"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder="Enter description"
                                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        {/* Price Input */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-black">Price</label>
                            <input
                                type="text"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                placeholder="Enter price"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleSaveChanges}
                                className="w-[80%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                {isEditMode ? 'Save Changes' : 'Add Offer'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
