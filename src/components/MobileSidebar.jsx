import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openSideBar } from '../redux/slices/authSlices';
import { Transition } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";
import Sidebar from './Sidebar';

const MobileSidebar = () => {

    const {isSidebarOpen} = useSelector((state) => state.auth);
    const mobileMenuRef = useRef(null);
    const dispatch = useDispatch();

    const closeSidebar = () => {
        dispatch(openSideBar(false));
    }

  return (
     <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={`md:hidden w-full h-full bg-black/40 transition-transform duration-700 transform
             ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={() => closeSidebar()}
          >
            <div className='bg-white dark:bg-[#1f1f1f] w-3/4 h-full'>
              <div className='w-full flex justify-end px-5 pt-5'>
                <button
                  onClick={() => closeSidebar()}
                  className='flex justify-end items-end text-[#1f1f1f] dark:text-white'
                >
                  <IoMdClose size={25} />
                </button>
              </div>

              <div className='-mt-10'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}

export default MobileSidebar
