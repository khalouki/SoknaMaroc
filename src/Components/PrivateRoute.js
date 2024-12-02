import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    // If the user is not logged in, redirect to login page
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // If the user is logged in, render the protected route
    return element;
};
export default PrivateRoute;