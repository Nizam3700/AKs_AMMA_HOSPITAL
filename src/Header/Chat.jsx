import React, { useState } from 'react';
import img1 from '../assets/logo/logo.png';
import {NavLink} from 'react-router-dom'

function Chat() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* can you modify the img link to react img line as syntax */}
            <img src={img1} className="h-13" alt="logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ak's Amma Hospital</span> */}
          </a>
          {/* Button for smaller screens */}
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <svg className="w-10 h-10 bg-purple-400 border-2 rounded border-black text-grey-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5C2 2.67157 2.67157 2 3.5 2H16.5C17.3284 2 18 2.67157 18 3.5C18 4.32843 17.3284 5 16.5 5H3.5C2.67157 5 2 4.32843 2 3.5ZM2 9.5C2 8.67157 2.67157 8 3.5 8H16.5C17.3284 8 18 8.67157 18 9.5C18 10.3284 17.3284 11 16.5 11H3.5C2.67157 11 2 10.3284 2 9.5ZM2 15.5C2 14.6716 2.67157 14 3.5 14H16.5C17.3284 14 18 14.6716 18 15.5C18 16.3284 17.3284 17 16.5 17H3.5C2.67157 17 2 16.3284 2 15.5Z"></path>
            </svg>
          </button>
          {/* Navigation menu */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
            <ul className="flex text-black flex-col md:flex-row font-bold  text-xl p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-purple-600 dark:bg-purple-300 md:dark:bg-white dark:border-gray-700">
              <li>
                <NavLink
                to="/"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-purple-600 border-2 border-black rounded
                    md:bg-purple-400 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Home
                </NavLink>
              </li>
              <li>
                {/* <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-black md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a> */}
                <NavLink
                to="/Github"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-purple-600 border-2 border-black rounded
                    md:bg-purple-400 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Doctor
                </NavLink>
              </li>
              <li>
                {/* <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a> */}
                <NavLink
                to="/contact"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-purple-600 border-2 border-black rounded 
                    md:bg-purple-400 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Contact Us
                </NavLink>
              </li>
              <li>
                {/* <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Serivces</a> */}
                <NavLink
                to="/Services"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-purple-600 border-2 border-black rounded 
                    md:bg-purple-400 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Services
                </NavLink>
              </li>
              <li>
                {/* <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Serivces</a> */}
                <NavLink
                to="/Services"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-green-700 border-2 border-black rounded 
                    md:bg-green-700 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Blood Donate
                </NavLink>
              </li>
              <li>
                {/* <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Serivces</a> */}
                <NavLink
                to="/Services"
                    className={({isActive}) =>
                    `block py-2 px-3 my-1 md:p-0 ${isActive ? "text-white" : "text-black" } bg-red-600 border-2 border-black rounded 
                    md:bg-red-600 md:p-2  md:text-purple-400  md:dark:text-black md:rounded-full md:hover:bg-slate-400`}>
                Emergency Call
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Chat;
