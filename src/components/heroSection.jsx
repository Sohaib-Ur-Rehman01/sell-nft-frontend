import React from "react";

export default function HeroSection() {
  return (
    <div className="">
      <div className="">
        <div className="max-w-[1200px] mx-auto  h-[50vh] flex justify-center items-center">
          <div className="flex flex-col justify-items-center items-center">
            <div className="">
              <div className="px-[16px] py-[8px] ">
                <p className="text-[40px] text-[#FFFFFF] text-center max-lg:text-[20px]">
                  Create <span className="font-bold">DIGITAL ART</span> and{" "}
                  <span className="font-bold">SELL</span> as{" "}
                  <span className="font-bold">NFT</span>
                </p>
              </div>

              <div className="flex w-full sm:w-[600px] md:w-[700px] min-w-4 justify-center items-center mx-auto max-lg:px-[16px] py-[8px]">
                <p className=" px-[16px] py-[8px] bg-[#B600D1] text-[26px] justify-center items-center text-[#FFFFFF] rounded-sm max-lg:text-[15px]">
                  Prompt
                </p>
                <input
                  type="text"
                  placeholder="Generate"
                  className="w-full px-[16px] py-[16px] focus-ring-0 outline-none rounded-sm max-lg:text-[15px] max-lg:px-[8px] max-lg:py-[8px]"
                />
              </div>
              <div className="px-[16px] py-[8px] text-[20px] font-medium text-center text-[#FFFFFF] max-lg:text-[15px]">
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
