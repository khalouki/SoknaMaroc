import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
const AdminSectionOffre = ({ offer }) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const handleShowDetail = () => {
        navigate(`/Dashboard/View?offre=${offer.id}`, { state: { offer } });
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };
    const handleDelete = (id) => {
        const mes = "Offre " + id + " Deleted Successfully";
        setMessage(mes); // Update the message state
    }
    return (
        <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{offer.title}</h2>
                <button
                    onClick={() => handleDelete(offer.id)}
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Delete
                </button>
            </div>

            <div className="p-4">
                <p><strong>Location:</strong> {offer.location}</p>
                <p><strong>Price:</strong> ${offer.price}</p>
                <p><strong>Date Added:</strong> {offer.dateAdded}</p>
                <div>
                    <strong>Description: </strong>
                    <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis w-full">{offer.description}</span>
                </div>
            </div>
            <div className=" flex justify-center bg-gray-100 px-4 py-3  items-center">
                <button
                    onClick={handleShowDetail}
                    className=" w-[80%] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Preview
                </button>

            </div>
            {/* Conditionally render the AlertMessage component */}
            {message && <AlertMessage message={message} />}
        </div>
    );
};
export default AdminSectionOffre;