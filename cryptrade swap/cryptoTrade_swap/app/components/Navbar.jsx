import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { ConnectButton } from '@rainbow-me/rainbowkit'

import toast, { Toaster } from 'react-hot-toast'


const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav  className="w-full flex lg:justify-center justify-between items-center p-4">
      <div className="mr-40 text-white flex flex-initial justify-center items-center flex-row">
        <img src="https://cdn.discordapp.com/attachments/1112388500038365385/1116438814794207273/Logo.png" alt="logo" className="w-10 cursor-pointer" />
        <p className="mx-4 tracking-wide text-xl font-bold"> DigitalTrade</p>
      </div>
      <ul className="text-white lg:flex hidden list-none flex-row justify-between items-center flex-initial">
          <li>
           <a href="http://localhost:5173/market" className="text-white m-4 hover:text-gray-300">Market</a>
          </li>
          <li>
           <a href="http://localhost:5173/sendto" className="text-white m-4 hover:text-gray-300">SendTo</a>
          </li>
          <li>
           <a href="http://localhost:3000/" className="text-white m-4 hover:text-gray-300">Exchange</a>
          </li>
        <div className='flex'>
        <ConnectButton className='mx-8' accountStatus={'full'} />
      </div>

      <Toaster />
        {/* {currentAccount && (
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            {shortenAddress(currentAccount)}
          </li>
        )} */}
      </ul>

      
      
      

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white lg:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white lg:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
            flex flex-col justify-start items-end rounded-lg blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;