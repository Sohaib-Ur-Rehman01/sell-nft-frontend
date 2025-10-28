import React from "react";
import footerImage from "../assets/footer.webp";

export default function Footer() {
  return (
    <>
      <div
        className="mt-10 "
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="max-w-[1200px] mx-auto px-8 py-16 rounded-[16px] flex flex-wrap flex-col gap-8 ">
          <h1 className="font-medium text-[40px] leading-[100%] tracking-normal text-[#FFFFFF]">
            How It Works
          </h1>
          <div
            className="flex flex-wrap justify-around md:flex-row md:items-start gap-10 md:gap-4 sm:flex  sm:flex-wrap sm:justify-between 
            sm:items-center 
            sm:gap-6"
          >
            <div className="flex flex-col gap-4 md:text-left max-w-[250px] sm:text-left sm:items-start ">
              <div className="bg-[#2438CB] w-10 h-10 rounded-md mx-auto md:mx-0"></div>
              <h1 className="text-[#FFFFFF] text-[24px] leading-[100%] tracking-normal">
                Set up your wallet
              </h1>
              <p className="text-[#B6B6B6] text-[18px] leading-[100%] tracking-normal px-2 ">
                Sed ut perspiciatis unde iste <br /> natus error sit voluptatem{" "}
                <br />
                accusantium doloremque <br /> laudantium, totam rem.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:text-left max-w-[250px] sm:items-start sm:text-left">
              <div className="bg-[#2438CB] w-10 h-10 rounded-md mx-auto md:mx-0"></div>
              <h1 className="text-[#FFFFFF] text-[24px] leading-[100%] tracking-normal">
                Create your NFT's{" "}
              </h1>
              <p className="text-[#B6B6B6] text-[18px] leading-[100%] tracking-normal px-2">
                Sed ut perspiciatis unde iste <br /> natus error sit voluptatem{" "}
                <br />
                accusantium doloremque <br /> laudantium, totam rem.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:text-left max-w-[250px] sm:items-start sm:text-left">
              <div className="bg-[#2438CB] w-10 h-10 rounded-md"></div>
              <h1 className="text-[#FFFFFF] text-[24px] leading-[100%] tracking-normal">
                Add your NFT's{" "}
              </h1>
              <p className="text-[#B6B6B6] text-[18px] leading-[100%] tracking-normal px-2">
                Sed ut perspiciatis unde iste <br /> natus error sit voluptatem{" "}
                <br />
                accusantium doloremque <br /> laudantium, totam rem.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:text-left max-w-[250px] sm:items-start sm:text-left">
              <div className="bg-[#2438CB] w-10 h-10 rounded-md text-center mx-auto md:mx-0"></div>
              <h1 className="text-[#FFFFFF] text-[24px] leading-[100%] tracking-normal text-center">
                Add your NFT's
              </h1>
              <p className="text-[#B6B6B6] text-[18px] leading-[100%] tracking-normal px-2">
                Sed ut perspiciatis unde iste <br /> natus error sit voluptatem{" "}
                <br />
                accusantium doloremque <br /> laudantium, totam rem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
