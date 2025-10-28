import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import backgroundImage from "./assets/background.webp";
import DigitalArtist from "./components/digitalArtist";
import NftCollection from "./components/nftCollection";
import TopCollection from "./components/topCollection";
import BidSection from "./components/bidSection";
import Footer from "./components/footer";
export default function App() {
  return (
    <>
      <div>
        <div className="bg-[url('/src/assets/background.webp')] bg-cover bg-center bg-no-repeat flex flex-col">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <DigitalArtist />
      <NftCollection />
      {/* <TopCollection /> */}
      <BidSection />
      <Footer />
    </>
  );
}
