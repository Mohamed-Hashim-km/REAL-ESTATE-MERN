import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='overflow-hidden'>
    <footer className="flex container mx-auto px-4 overflow-hidden flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-slate-200 md:justify-between">
  <p className="block text-slate-800 font-semibold text-sm">
      Realestate
      </p>
  <ul className="flex md:me-16 lg:me-0 flex-wrap items-center gap-y-2 gap-x-8">
    <li>
     <p className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        About Us
      </p>
    </li>
    <li>
     <p className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        License
      </p>
    </li>
    <li>
     <p className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contribute
      </p>
    </li>
    <li>
    <p className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contact Us
      </p>
    </li>
  </ul>
</footer> 
</div>
    </>
  )
}

export default Footer

