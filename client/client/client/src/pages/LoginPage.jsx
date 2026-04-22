import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/authSlice';
import Navbar from '../components/common/Navbar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginAsync({ email, password }));
    if (result.type === 'auth/login/fulfilled') {
      navigate('/dashboard');
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <Navbar />
      <div className='container mx-auto px-4 py-20 flex justify-center items-center min-h-[calc(100vh-80px)]'>
        <div className='w-full max-w-md'>
          <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                Welcome Back
              </h2>
              <p className='text-gray-400 text-sm'>Sign in to your SmartPaths account</p>
            </div>

            {error && (
              <div className='mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg'>
                <p className='text-red-400 text-sm'>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='group'>
                <label className='block text-gray-300 text-sm font-medium mb-2.5'>Email Address</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='you@example.com'
                  className='w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all'
                  required
                />
              </div>
              
              <div className='group'>
                <label className='block text-gray-300 text-sm font-medium mb-2.5'>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••'
                  className='w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all'
                  required
                />
              </div>

              <div className='flex items-center justify-between text-sm'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input type='checkbox' className='w-4 h-4 rounded bg-white/10 border border-white/20 cursor-pointer' />
                  <span className='text-gray-400'>Remember me</span>
                </label>
                <Link to='#' className='text-purple-400 hover:text-purple-300 transition'>
                  Forgot password?
                </Link>
              </div>
              
              <button
                type='submit'
                disabled={loading}
                className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50'
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className='my-6 flex items-center gap-3'>
              <div className='flex-1 h-px bg-white/10'></div>
              <span className='text-gray-500 text-sm'>or</span>
              <div className='flex-1 h-px bg-white/10'></div>
            </div>

            <p className='text-center text-gray-400'>
              Don't have an account?{' '}
              <Link to='/register' className='font-semibold text-purple-400 hover:text-purple-300 transition'>
                Create account
              </Link>
            </p>
          </div>

          <p className='text-center text-gray-500 text-xs mt-6'>
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
