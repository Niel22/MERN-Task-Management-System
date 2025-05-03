import React, { useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from '../redux/slices/authSlices';
import NotificationPanel from './NotificationPanel';
import UserAvatar from './UserAvatar';

const NavBar = () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
  }


  return (
    <div className='flex justify-between items-center bg-white dark:bg-[#1f1f1f] px-4 py-3 2xl:py-4 sticky z-10 top-0'>
      <div className='flex gap-4'>
        <div className=''>
          <button
            onClick={() => dispatch(openSideBar(true))}
            className='text-2xl text-gray-500 block md:hidden'
          >
            ☰
          </button>
        </div>

        {location?.pathname !== "/dashboard" && (
          <form
            onSubmit={handleSubmit}
            className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-md bg-[#f3f4f6] dark:bg-[#1c1c1c]'
          >
            <MdOutlineSearch className='text-gray-500 text-xl' />

            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              type='text'
              placeholder='Search...'
              className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-300'
            />
          </form>
        )}
      </div>

      <div className='flex gap-2 items-center'>
        <NotificationPanel />

        <UserAvatar />
      </div>
    </div>
  )
}

export default NavBar
