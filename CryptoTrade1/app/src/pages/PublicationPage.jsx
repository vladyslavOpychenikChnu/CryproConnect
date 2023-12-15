import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Publication from "../components/Publication";
import React from 'react';


const PublicationPage = () => (

  <div className="min-h-screen">
    <div className="gradient-bg-main">
      <Navbar />
      <Publication />
    </div>
    <Footer />
    
  </div>
)

export default PublicationPage;