import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose}
 from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className='text-[#00d8ff]'>CryptoFlag</h1>

        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white item-center'>
            <li>Report</li>
            <li>Validation</li>
          </ul>
        </div>

        <div onClick = {handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
        
        </div>

        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
            <ul>
            <li className="text-2xl">Report</li>
            <li className="text-2xl">Validate</li>            
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
