import Footer from '../components/Footer'
import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'
import Navbar from "../components/Navbar";
import AboutSwap from "../components/AboutSwap";

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-main items-center  flex flex-col">
      <Navbar />
      <Header />
      <AboutSwap />
      
      <SwapComponent />
      <Footer />
    </div>
    </div>
  )
}
