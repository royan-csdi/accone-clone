import satellite from "@/services/satellite";
import { IIklan } from "@/types";
import { ReturnResponse } from "@/types/common.type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const examImg =
  "https://netimg.acc.co.id/ACCONE/PAYMENT_METHOD/PAYMENT_METHOD_1767619.JPG";
const Hero = async () => {
  return (
    <div className="h-[412px] bg-gradient-to-b from-[#006FAD] to-[#001745] flex items-center">
      <div className="container flex items-center justify-between gap-10 px-14">
        <div className="max-w-[350px]">
          <h1 className="text-[38px] font-bold text-white">Kredit Multiguna</h1>
          <p className="text-[22px] text-white font-light">
            Untuk berbagai kebutuhan Anda dengan Jaminan BPKB
          </p>
        </div>
        <div className="relative">
          <div>
            <div className="absolute top-[40%] left-[-20px] bg-black bg-opacity-50 hover:bg-opacity-100 w-[36px] h-[36px] flex items-center justify-center rounded-full">
              <ChevronLeft width={24} height={24} color="white" />
            </div>
            <div className="absolute top-[40%] right-[-20px] bg-black bg-opacity-50 hover:bg-opacity-100 w-[36px] h-[36px] flex items-center justify-center rounded-full">
              <ChevronRight width={24} height={24} color="white" />
            </div>
          </div>
          <Image
            src={examImg}
            className="w-full h-full rounded-md"
            width={738}
            height={320}
            alt="Promo ACC"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
