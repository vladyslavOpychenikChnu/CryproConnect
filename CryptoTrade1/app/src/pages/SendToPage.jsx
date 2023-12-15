import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SendTo from "../components/SendTo";
import Services from "../components/Services";
import Transactions from "../components/Transactions";
import React from 'react';


const SendToPage = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-main">
      <Navbar />
      <SendTo />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default SendToPage;