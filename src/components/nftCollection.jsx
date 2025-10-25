import React from "react";
import productImage from "../assets/Rectangle.webp";
import coinImage from "../assets/Group.webp";
import cardCenterImage from "../assets/Ellipse.webp";
import tickerImage from "../assets/tick.webp";
import buyImage from "../assets/buy.webp";
export default function NftCollection() {
  const product = [
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
    {
      cardImage: productImage,
      name: "TUD NFT",
      price: " #9840",
      coinPrice: "260",
      cardCenterImage: cardCenterImage,
    },
  ];
  console.log(product);

  return (
    <>
      <div className="">
        <div className="max-w-[1200px] mx-auto">
          <p className="px-8 py-4 text-[40px] leading-[100%] tracking-[0%]">
            NFT Collection
          </p>
          <div className="px-16 py-4 ">
            <div className="flex flex-wrap w-full max-w-5xl gap-4 cursor-pointer transition-all duration-500 ease-in-out">
              {product.map((product) => (
                <>
                  <div className="relative overflow-hidden shadow group duration-300 transition-all  ease-in-out hover:shadow-2xl flex flex-col flex-wrap rounded-lg ">
                    <img
                      src={product.cardImage}
                      className="h-[30vh] w-[15vw] duration-500 group-hover:h-[25vh]"
                      alt=""
                    />
                    <div className="flex justify-between px-2 py-4">
                      <p className="text-[#2636D9] font-medium text-[18px] leading-[100%]">
                        {product.name}
                      </p>
                      <p className="text-[#4A4949] text-[14px] font-medium leading-[100%]">
                        {product.price}
                      </p>
                    </div>
                    <div className="flex justify-between px-2">
                      <p className="font-medium text-[14px] leading-[100%] tracking-normal text-[#4A4949]">
                        Price
                      </p>
                      <div className="flex gap-2 mr-4 rounded-lg ">
                        <img src={coinImage} alt="" />
                        <p className="text-[#2636D9] text-[18px] leading-[100%] font-medium tracking-normal">
                          {product.coinPrice}
                        </p>
                      </div>

                      <img
                        src={product.cardCenterImage}
                        alt=""
                        className="absolute top-[50%] left-[40%] w-[60px] h-[60px] group-hover:hidden transition-all duration-300"
                      />
                      <img
                        src={tickerImage}
                        alt=""
                        className="absolute top-[55%] left-[57%] w-[20px] h-[20px]  group-hover:hidden transition-all duration-300"
                      />
                    </div>
                    <div className="bg-[linear-gradient(62.85deg,#2636D9_16.95%,#B600D1_83.05%)] rounded-xl flex justify-between items-center opacity-0 pointer-events-none  leading-[100%] tracking-[0%] group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out mt-4">
                      <p className="px-2 py-4 font-poppins font-medium text-[#FFFFFF] leading-[100%]tracking-[0%]">
                        Buy Now
                      </p>
                      <p className="bg-[#808080e1] px-2 py-4 rounded-r-xl">
                        <img src={buyImage} alt="" />
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
