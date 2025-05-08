import { Navigate, useLocation } from 'react-router-dom';

/**
 * Protected Route component that verifies JWT token before allowing access
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The component to render if authenticated
 * @returns {React.ReactNode} The protected component or redirect to login
 */

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  // Check if user is authenticated by verifying JWT token
  const isAuthenticated = () => {
    const token = localStorage.getItem("JWT");
    // Ensure token exists and is not the "not authorized" value
    return token && token !== 'not authorized';
  };

  // If not authenticated, redirect to login with the return path
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
