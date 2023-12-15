import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import React from 'react';


const SendToPage = () => (

  <div className="min-h-screen">
    <div className="gradient-bg-main">
      <Navbar />
      <Login />
    </div>
    <Footer />
  </div>
);

export default SendToPage;