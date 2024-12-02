import React from 'react';

const WelcomeModal = ({ onClose, username }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold text-center">Welcome Back, {username}!</h2>
                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
