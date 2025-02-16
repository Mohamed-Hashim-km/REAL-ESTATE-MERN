import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../slices/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const dispatch = useDispatch();


  const submitHandler=()=>{

  }

  return (
    <>
    <div className="fixed z-[999] top-0 w-full">
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center justify-between py-4 shadow-md ">
        <div className=" flex justify-between items-center">
          <Link to={"/"}>
             <h1 className="text-xl">Realestate</h1>
          </Link>
        </div>

<form onSubmit={submitHandler}>
<div className="relative max-w-sm mx-auto ">
    <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search"/>
    <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
    </svg>
  </button>
</div>
        </form>
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                About Us
              </li>
              <li className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                Treatments
              </li>
              {/* <li className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                Blog
              </li> */}
              {!userInfo && !userInfo?.name &&(
                <Link to={"login"}>
                  <li  className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                     Login
                  </li>
                </Link>
              )}
            </ul>
          </nav>
          {userInfo && userInfo?.name &&(
        <div className="flex  dark:bg-gray-900">
          <div className="dropdown inline-block relative">
            <button className="  text-gray-700  dark:text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center">
             <span className="me-1">{userInfo.name}</span> <svg className="fill-current  h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 dark:text-gray-300 pt-1">
              <li className="rounded-t bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                 One
              </li>
              <li className="rounded-t bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                 Two
              </li>
              <li onClick={() => dispatch(clearCredentials())} className="rounded-t bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                 Logout
              </li>
            </ul>
          </div>
        </div>)}
        </div>

        
      </header>
      </div>
    </>
  );
};

export default Navbar;
