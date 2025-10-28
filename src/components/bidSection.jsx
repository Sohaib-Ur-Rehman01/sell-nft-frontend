import React from "react";
import cardPic from "../assets/piture.webp";
import threedots from "../assets/3 dot.webp";
import heartImage from "../assets/heart.webp";
import emojiPic from "../assets/Ellipse.webp";
import tickerImage from "../assets/tick.webp";

export default function BidSection() {
  const products = [
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
    {
      id: 1,
      name: "Pinky Ocean",
      price: "0.08 ETH1/20",
      likes: 50,
      cardPic: cardPic,
      threedots: threedots,
      heartImage: heartImage,
      emojiPic: emojiPic,
      time: { d: "46d", h: "18h", m: "40m", s: "10s" },
    },
  ];
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-10 mb10 flex flex-wrap gap-8 justify-center sm:justify-center">
        {products.map((item) => (
          <div className="w-[250px] max-w-[350px] border-2 border-gray-200 rounded-[16px] flex flex-col gap-4 relative item mt-[16px]">
            <img src={cardPic} alt="" className="" />
            <div className="px-[16px] py-[8px]">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-[#121212] text-[20px] leading-[100%] tracking-normal">
                    {item.name}
                  </h1>
                  <div className="">
                    <img
                      src={item.threedots}
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <h1 className="font-medium text-[16px] leading-[100%] tracking-normal">
                  {item.price}
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="text-[16px] font-medium leading-[100%] text-[#B600D1]">
                    Place a bid
                  </h1>
                  <div className="flex items-center gap-1">
                    <img
                      src={item.heartImage}
                      alt=""
                      className="text-[#C2C2C2]"
                    />
                    <p className="font-medium text-[14px] leading-[100%] tracking-normal text-[#8E8E8E]">
                      {item.likes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-5">
              <img
                src={item.emojiPic}
                alt=""
                className="border-8 border-[white] rounded-full"
              />
              <img
                src={tickerImage}
                alt=""
                className="absolute top-10 w-4 h-4 left-12"
              />
            </div>
            <div className="bg-[#2636D9] rounded-full flex justify-between px-[16px] py-[8px]  absolute -top-5 -right-2 w-[190px]">
              <p className="font-medium text-[18px] leading-[100%] tracking-normal text-[#FFFFFF]">
                {item.time.d}
              </p>
              <p className="font-medium text-[18px] leading-[100%] tracking-normal text-[#FFFFFF]">
                {item.time.h}
              </p>
              <p className="font-medium text-[18px] leading-[100%] tracking-normal text-[#FFFFFF]">
                {item.time.m}
              </p>
              <p className="font-medium text-[18px] leading-[100%] tracking-normal text-[#FFFFFF]">
                {item.time.s}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
