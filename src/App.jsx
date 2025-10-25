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
      <div
        // className="bg-coverbg-no-repeat gap-20 max-w-[1200px] mx-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-coverbg-no-repeat flex flex-col max-w-[1200px] mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <DigitalArtist />
      <NftCollection />
      <TopCollection />
      <BidSection />
      <Footer />
    </>
  );
}
