import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../images/Logo.svg";
import { shortenAddress } from "../utils/shortenAddress";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {connectWallet, currentAccount} = useContext(TransactionContext);

const getAuthToken = () => {
    return localStorage.getItem('token');
  };
const isLoggedIn = !!getAuthToken();
  

  return (
    <nav  className="w-full flex lg:justify-center justify-between items-center p-4">
      <div className="mr-40 text-white flex flex-initial justify-center items-center flex-row">
        <img src={logo} alt="logo" className="w-10 cursor-pointer" />
        <p className="mx-4 tracking-wide text-xl font-bold"> CryptoConnect</p>
      </div>
      <ul className="text-white lg:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "SendTo"].map((item, index) => (
          <li key={item + index}>
            <Link to={`/${item.toLowerCase()}`} className="text-white m-4 hover:text-gray-300">{item}</Link>
          </li>
          
        ))}

          <li>
           <a href="http://localhost:3000/" className="text-white m-4 hover:text-gray-300">Exchange</a>
          </li>

          <ul>
            {isLoggedIn ? (
              <li className="bg-transparent py-2 px-7 ml-4 rounded-full border border-[#A90E8F] cursor-pointer hover:bg-[#A90E8F] hover:text-white">
              <Link to={`/profile`}>Профіль</Link>
            </li>
            ) : (
              <li className="bg-[#A90E8F] py-2 px-7 ml-4 rounded-full cursor-pointer hover:bg-[#930C7C]">
                <Link to={`/login`}>Login</Link>
              </li>
            )}
          </ul>
        {!currentAccount && (
          <li onClick={connectWallet} className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Connect Wallet
          </li>
        )}
        {currentAccount && (
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            {shortenAddress(currentAccount)}
          </li>
        )}
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