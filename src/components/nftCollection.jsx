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
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center">
          <p className="px-[16px] py-[8px]  text-[40px] leading-[100%] tracking-[0%]">
            NFT Collection
          </p>
          <div className="px-[16px] py-[8px] flex justify-center">
            <div className="flex justify-center flex-wrap w-full max-w-5xl gap-4 cursor-pointer transition-all duration-500 ease-in-out">
              {product.map((product) => (
                <>
                  <div className="relative min-w-[220px] max-w-[220px] overflow-hidden shadow group duration-300 transition-all  ease-in-out hover:shadow-2xl flex flex-col flex-wrap rounded-lg h-[290px] gap-4 group-hover:h-[200px] px-[8px] py-[4px]">
                    <div className="p-0">
                      <img
                        src={product.cardImage}
                        className="duration-500 group-hover:h-[160px] group-hover:w-full p-0"
                        alt=""
                      />
                    </div>

                    <div className="flex justify-between px-[16px] py-[8px]">
                      <p className="text-[#2636D9] font-medium text-[18px] leading-[100%]">
                        {product.name}
                      </p>
                      <p className="text-[#4A4949] text-[14px] font-medium leading-[100%]">
                        {product.price}
                      </p>
                    </div>
                    <div className="group-hover:hidden flex justify-between px-[16px] py-[8px]">
                      <p className="font-medium text-[14px] leading-[100%] tracking-normal text-[#4A4949]">
                        Price
                      </p>
                      <div className="flex gap-2 mr-4 rounded-lg">
                        <img src={coinImage} alt="" />
                        <p className="text-[#2636D9] text-[18px] leading-[100%] font-medium tracking-normal">
                          {product.coinPrice}
                        </p>
                      </div>

                      <img
                        src={product.cardCenterImage}
                        alt=""
                        className="absolute top-[45%] left-[40%] w-[60px] h-[60px] group-hover:hidden transition-all duration-300 border-8 border-[white] rounded-full"
                      />
                      <img
                        src={tickerImage}
                        alt=""
                        className="absolute top-[50%] left-[57%] w-[15px] h-[15px]  group-hover:hidden transition-all duration-300"
                      />
                    </div>
                    <div className="bg-[linear-gradient(62.85deg,#2636D9_16.95%,#B600D1_83.05%)] rounded-xl flex justify-between items-center opacity-0 pointer-events-none  leading-[100%] tracking-[0%] group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out">
                      <p className="px-[16px] py-[8px] font-poppins font-medium text-[#FFFFFF] leading-[100%]tracking-[0%]">
                        Buy Now
                      </p>
                      <p className="bg-[#808080e1] px-[16px] py-[8px] rounded-r-xl">
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
