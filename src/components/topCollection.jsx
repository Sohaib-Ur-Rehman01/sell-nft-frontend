import React from "react";
import bird from "../assets/bird.webp";
import bull from "../assets/bull.webp";
import ellipse from "../assets/Ellipse9.webp";
import universe from "../assets/universe.webp";
import ticker from "../assets/tick.webp";

export default function TopCollection() {
  const data = [
    {
      name: "Bull BTC Club",
      image: bull,
      price: "500.59 ETH",
      change: "0.59 ETH",
      tickerImage: ticker,
    },
    {
      name: "Genesis Universe Medal",
      image: universe,
      price: "500.59 ETH",
      change: "62.59 ETH",
      tickerImage: ticker,
    },
    {
      name: "Metabox Genesis Miner NFT",
      image: ellipse,
      price: "500.59 ETH",
      change: "11.59 ETH",
      tickerImage: ticker,
    },
    {
      name: "Bird World Mystery Box 3",
      image: bird,
      price: "500.59 ETH",
      change: "11.59 ETH",
      tickerImage: ticker,
    },
  ];

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <h1 className="font-medium text-[40px] leading-[100%] tracking-normal text-[#121212]">
            Top Collection
          </h1>
          <button className="cursor-pointer text-[24px] leading-[100%] text-[#B600D1]">
            View more markets
          </button>
        </div>
        {/* <div className="flex justify-between">
          <div className="">
            <p className="text-[#969696] text-[24px]">Name</p>
          </div>
          <div className="">
            <p className="text-[#969696] text-[24px]">Last Price</p>
          </div>
          <div className="">
            <p className="text-[#969696] text-[24px]"> 24h Change</p>
          </div>
        </div> */}

        <div class="grid grid-cols-[2fr_1fr_1fr] gap-4 p-4">
          <div class="p-6 text-left text-[24px] text-[#969696]">Name</div>
          <div class=" p-6 text-center text-[24px] text-[#969696]">
            Last Price
          </div>
          <div class=" p-6 text-right text-[24px] text-[#969696]">
            24h Change
          </div>
          {data.map((item) => (
            <>
              <div className=" p-6 text-left gap-3">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                        
        rounded-full object-cover
        w-20 h-20            
        sm:w-16 sm:h-16      
        md:w-14 md:h-14      
        lg:w-12 lg:h-12      
                        
                        "
                      />
                    )}
                    {item.tickerImage && (
                      <img
                        src={item.tickerImage}
                        alt=""
                        className="w-4 h-4 rounded-full absolute bottom-1 -right-1 border border-white"
                      />
                    )}
                  </div>

                  <span className="text-[24px] leading-[100%]">
                    {item.name}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center leading-[100%]">{item.price}</div>
              <div className="p-6 text-right">{item.change}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
