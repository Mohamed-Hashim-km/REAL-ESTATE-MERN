import React from "react";
import { FaBed } from "react-icons/fa";


const Card = () => {
  return (
    <>
      <div className="relative flex flex-wrap  flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
        <div className="relative h-44 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <h6 className="text-slate-800 text-xl font-semibold">Wooden House, Florida</h6>

            <div className="flex items-center gap-0 5 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600">
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-slate-600 ml-1.5">5.0</span>
            </div>
          </div>

          <p className="text-slate-600 leading-normal font-light">Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.</p>
        </div>

        <div className="group mx-5  mb-3 mt-1  flex justify-between items-center gap-2">
            <div className="flex ">
          <FaBed /> <p className="text-[10px] ml-1">1 Bedroom</p>
          </div>
          <div className="flex ">
          <FaBed /> <p className="text-[10px] ml-1">1 Bedroom</p>
          </div>
          <div className="flex ">
          <FaBed /> <p className="text-[10px] ml-1">1 Bedroom</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
