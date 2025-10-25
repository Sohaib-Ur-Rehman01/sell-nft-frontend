import React from "react";

export default function HeroSection() {
  return (
    <div className="">
      <div className="">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col justify-items-center items-center ">
            <div className="">
              <div className="px-2">
                <p className="text-[40px] text-[#FFFFFF] text-center">
                  Create <span className="font-bold">DIGITAL ART</span> and{" "}
                  <span className="font-bold">SELL</span> as{" "}
                  <span className="font-bold">NFT</span>
                </p>
              </div>

              <div className="flex w-full sm:w-[600px] md:w-[700px] min-w-4 justify-center items-center mx-auto">
                <p className=" px-2 py-2 bg-[#B600D1] text-[26px] justify-center items-center">
                  Prompt
                </p>
                <input
                  type="text"
                  placeholder="Generate"
                  className="w-full px-2 py-4 focus-ring-0 outline-none"
                />
              </div>
              <div className="px-2 py-4 font-[20px] font-medium text-center text-[#FFFFFF]">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              </div>

              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
