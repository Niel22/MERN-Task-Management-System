import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const Layout = () => {

  const {user} = useSelector((state) => state.auth);
    const location = useLocation();

    return user ? (
        <div className='w-full h-screen flex flex-col md:flex-row'>
            <div className='w-1/5 h-screen bg-white dark:bg-[#1f1f1f] sticky top-0 hidden md:block'>

            </div>

            <div className='flex-1 overflow-y-auto'>

                <div className='p-4 2xl:px-10'>

                </div>
            </div>
        </div>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace/>
      )
}

export default Layout