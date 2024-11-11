"use client";
import { IIklan } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  iklan: IIklan[];
};
const HeroCarousel = ({ iklan }: Props) => {
  const [masterData] = useState(iklan);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLength = masterData.length;
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideLength - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleNext = () => {
    const isLastSlide = currentIndex === slideLength - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="max-w-[350px]">
        <h1 className="text-[38px] font-bold text-white">
          {masterData[currentIndex].name}
        </h1>
        <p className="text-[22px] text-white font-light">
          {masterData[currentIndex].content}
        </p>
      </div>
      <div className="relative">
        <div>
          <div className="absolute top-[40%] left-[-20px] bg-black bg-opacity-50 hover:bg-opacity-100 w-[36px] h-[36px] flex items-center justify-center rounded-full">
            <ChevronLeft
              width={24}
              height={24}
              color="white"
              onClick={handlePrev}
            />
          </div>
          <div className="absolute top-[40%] right-[-20px] bg-black bg-opacity-50 hover:bg-opacity-100 w-[36px] h-[36px] flex items-center justify-center rounded-full">
            <ChevronRight
              width={24}
              height={24}
              color="white"
              onClick={handleNext}
            />
          </div>
        </div>
        <Image
          src={masterData[currentIndex].image}
          className="w-full h-full rounded-md"
          width={738}
          height={320}
          alt="Promo ACC"
        />
      </div>
    </>
  );
};

export default HeroCarousel;
