// ProtectedLayout.js
import React from 'react';
import { Header, Footer } from './layout';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
export default ProtectedLayout;
