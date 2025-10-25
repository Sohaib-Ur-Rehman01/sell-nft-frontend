import React from "react";

export default function DigitalArtist() {
  return (
    <div className="flex justify-center align-center bg-gradient-to-b from-[#AE03D1] to-[#3233CC] p-10 text-white">
      <div className=" max-w-[1200px] mx-auto">
        <div className="">
          <div className="px-2 py-4">
            <p className="text-[40px] text-center">
              WE HAVE THE <span className="font-bold">BEST</span> NFT{" "}
              <span className="font-bold">DIGITAL ARTISTS</span>
            </p>
            <p className="text-[20px] text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br /> tincidunt ut laoreet dolore magna
              aliquam erat volutpat.
            </p>
            <div className="flex justify-center align-center gap-10">
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] font-[44px]">10K+</div>
                <div className="font-medium font-[26px]">RARE NFT</div>
              </div>
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] font-[44px]">80K+</div>
                <div className="font-medium font-[26px]">PRODUCTS</div>
              </div>
              <div className="flex flex-col justify-center align-center text-center">
                <div className="font-[900] font-[44px]">05K+</div>
                <div className="font-medium font-[26px]">NEW ARTIST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
