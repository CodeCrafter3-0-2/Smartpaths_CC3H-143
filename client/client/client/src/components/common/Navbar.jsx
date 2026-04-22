import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl"></span>
            <span className="text-xl font-bold text-white">SmartPaths</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <Link to="/about" className="text-white/80 hover:text-white">About</Link>
            <Link to="/domains" className="text-white/80 hover:text-white">Domains</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-white/80 hover:text-white">Dashboard</Link>
                <Link to="/quiz" className="text-white/80 hover:text-white">Quiz</Link>
                <Link to="/profile" className="text-white/80 hover:text-white">Profile</Link>
                <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white/80 hover:text-white">Login</Link>
                <Link to="/register" className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
