import React, { useState, useEffect } from 'react';

export default function AlertMessage({ message }) {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (message) {
            setShowAlert(true);
            // Hide the alert after 3 seconds
            const timer = setTimeout(() => setShowAlert(false), 3000);

            // Clean up the timer
            return () => clearTimeout(timer);
        }
    }, [message]);  // Re-run when message changes

    return (
        <div>
            {showAlert && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-black text-white p-4 rounded shadow-lg">
                        {message}
                    </div>
                </div>
            )}
        </div>
    );
}
