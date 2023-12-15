import React from "react";


const Footer = () => (
  <div className="mt-20 w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-col flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center mb-10">
        <img src="https://cdn.discordapp.com/attachments/1112388500038365385/1116438814794207273/Logo.png" alt="logo" className="w-10" />
        <p className="mx-4 text-white tracking-wide text-xl font-bold"> DigitalTrade</p>
      </div>
      <div className="flex flex-1 justify-evenly font-semibold items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">About Us</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Support</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Community</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center font-medium mt-2">info@digitaltrade.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full items-center mt-3">
      <p className="text-white text-center text-xs">DigitalTrade © Copyright 2023</p>
    </div>
  </div>
);

export default Footer;