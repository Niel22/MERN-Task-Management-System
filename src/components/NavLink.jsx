import clsx from 'clsx';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({el}) => {
    const dispatch = useDispatch();
    const closeSidebar = () => {
        dispatch(openSideBar(false));
    }

    const location = useLocation();

    const path = location.pathname.split('/')[1];
  return (
    <Link
        onClick={closeSidebar}
        to={el.link}
        className={clsx(
            "w-fult lg:w-3/4 flex gap-2 px-3 py-2 rounded-md items-center text-gray-800 dark:text-gray-400 text-base hover:bg-[#2564ed2d]",
            path === el.link.split("/")[0] ? "bg-blue-700 text-white" : ""
        )}
        >
        {el.icon}
        <span className='hover:text-[#2564ed]'>{el.label}</span>
    </Link>
  )
}

export default NavLink
