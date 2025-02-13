import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../slices/authSlice";
import {Link} from "react-router-dom"

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const dispatch=useDispatch()

  return (
    <>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <Link to={"/"}><a className="text-xl">Realestate</a></Link>
        </div>

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
              <li>
                <a className="md:p-4 py-3 px-0 block">About Us</a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block">Treatments</a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block">Blog</a>
              </li>
             {userInfo&&userInfo.name?
             <li onClick={()=>dispatch(clearCredentials())}>
                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2">Logout</a>
              </li>:<Link to={"login"}><li>
                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2">Login</a>
              </li></Link>}
            </ul>
          </nav>
        </div>


        
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black flex" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

      </header>





      
    </>
  );
};

export default Navbar;
