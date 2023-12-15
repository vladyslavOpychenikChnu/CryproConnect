import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swap from "../components/Swap";
import React from 'react';


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

const SwapPage = () => (

  <div className="min-h-screen">
    <div className="gradient-bg-main">
      <Navbar />
      <Swap />
    </div>
    <Footer />
  </div>
);

export default SwapPage;