import React from "react";

export default function DigitalArtist() {
  return (
    <div className="flex justify-center align-center bg-gradient-to-b from-[#AE03D1] to-[#3233CC] p-10 text-white">
      <div className=" max-w-[1200px] mx-auto">
        <div className="">
          <div className="px-2 py-4">
            <p className="text-[40px] text-center max-lg:text-[25px]">
              WE HAVE THE <span className="font-bold">BEST</span> NFT{" "}
              <span className="font-bold">DIGITAL ARTISTS</span>
            </p>
            <p className="text-[20px] text-center max-lg:text-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br /> tincidunt ut laoreet dolore magna
              aliquam erat volutpat.
            </p>
            <div className="flex flex-wrap max-lg:flex-col max-lg:gap-8 justify-center align-center gap-32">
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] text-[44px] max-lg:text-[20px]">
                  10K+
                </div>
                <div className="font-medium text-[26px] max-lg:text-[15px]">
                  RARE NFT
                </div>
              </div>
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] text-[44px] max-lg:text-[20px]">
                  80K+
                </div>
                <div className="font-medium text-[26px] max-lg:text-[15px]">
                  PRODUCTS
                </div>
              </div>
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] text-[44px] max-lg:text-[20px]">
                  05K+
                </div>
                <div className="font-medium text-[26px] max-lg:text-[15px]">
                  NEW ARTIST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
