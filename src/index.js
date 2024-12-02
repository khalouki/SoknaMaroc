import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  Notfound } from './Components/layout';
import { ClientSection } from './page/ClientSection';
import { Preview } from './page/ClientOffrePreview';
import AdminDashboard from './page/AdminSection';
import EditViewPage from './page/EditViewPage';
import ProfilePage from './page/AdminProfilePage';
import AuthForm from './page/AuthForm';
import PrivateRoute from './Components/PrivateRoute';
import ProtectedLayout from './Components/ProtectedLayout'; // Import the new layout

import './css/dashbord.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for authentication pages (no header/footer) */}
        <Route>
          <Route path="/login" element={<AuthForm />} />
          {/* Add more auth pages here, like sign-up */}
        </Route>

        {/* Routes for protected pages (with header/footer) */}
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/" element={<ClientSection />} />
          <Route path="/preview" element={<Preview />} />

          {/* Protected routes */}
          <Route path="/Dashboard" element={<PrivateRoute element={<AdminDashboard />} />} />
          <Route path="/Dashboard/View" element={<PrivateRoute element={<EditViewPage />} />} />
          <Route path="/Dashboard/Add" element={<PrivateRoute element={<EditViewPage />} />} />
          <Route path="/Profile" element={<PrivateRoute element={<ProfilePage />} />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
