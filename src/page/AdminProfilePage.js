'use client'
import React, { useState } from 'react'
import photo_cv from '../images/photo_cv.png';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState({
        name: 'Abdelkhalk Essaid',
        phone: '+212 653738676',
        email: 'Abdelkhalkessaid1@gmail.com',
        location: 'Oued zem , Maroc',
        avatarUrl: photo_cv
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEditing(false)
        // Here you would typically send the updated profile to a server
        console.log('Profile updated:', profile)
    }

    const InfoItem = ({ icon, label, value }) => (
        <div className="flex items-center space-x-2">
            {icon}
            <span className="font-medium">{label}:</span>
            <span className="text-gray-600">{value}</span>
        </div>
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center sm:text-left flex-grow">
                            <h1 className="text-2xl font-bold">{profile.name}</h1>
                            <p className="text-gray-600">{profile.location}</p>
                        </div>
                        <button
                            className={`px-4 py-2 rounded-md font-serif text-white ${isEditing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Cancel
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                    Edit Profile
                                </>
                            )}
                        </button>
                    </div>
                    <div className="mt-6">
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className="space-y-4 ">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleInputChange}
                                        required
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleInputChange}
                                        required
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={profile.location}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                    />
                                </div>
                                <div className='flex justify-center'>
                                <button type="submit" 
                                className="w-[60%] bg-black font-serif text-white px-4 py-2 rounded-md  transition duration-300 flex items-center justify-center">
                                    
                                    Save Changes
                                </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <InfoItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>}
                                    label="Phone"
                                    value={profile.phone}
                                />
                                <InfoItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>}
                                    label="Email"
                                    value={profile.email}
                                />
                                <InfoItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>}
                                    label="Location"
                                    value={profile.location}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage
