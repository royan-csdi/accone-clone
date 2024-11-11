"use client";
import { ICar } from "@/types";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import CarCard from "./CarCard";
import { Button } from "../ui/button";
import CarSkeleton from "./CarSkeleton";
import CarsFetcher from "./CarsFetcher";
import CarsData from "./CarsData";

const icons = {
  newCar: "https://www.acc.co.id/accone/img/acc_co_id_Theme.IconMobilBaru.svg",
  usedCar:
    "https://www.acc.co.id/accone/img/acc_co_id_Theme.IconMobilBekas.svg",
  sellCar:
    "https://www.acc.co.id/accone/img/acccoid_Homepage_CW.iconjualmobil2.svg",
  finance: "https://www.acc.co.id/accone/img/acc_co_id_Theme.IconDana.svg",
  other: "https://www.acc.co.id/accone/img/acc_co_id_Theme.IconSemuaProduk.svg",
};

const Car = () => {
  return (
    <div className="pt-[32px] pb-[8px] grid grid-cols-12 gap-6">
      <div className="col-span-3 flex flex-col justify-center rounded-md border-2 border-gray-100">
        <h1 className="text-[21px] font-black border-b-2 border-gray-100 text-center p-6">
          Cari Kebutuhan Anda
        </h1>
        <div className="flex p-4 ml-10 gap-4 items-center border-b-2 border-gray-100">
          <Image src={icons.newCar} alt="newCar" width={31} height={30} />
          <h3 className="font14 font-medium">Beli Mobil Baru</h3>
        </div>
        <div className="flex p-4 ml-10 gap-4 items-center border-b-2 border-gray-100">
          <Image src={icons.usedCar} alt="newCar" width={31} height={30} />
          <h3 className="font14 font-medium">Beli Mobil Bekas</h3>
        </div>
        <div className="flex p-4 ml-10 gap-4 items-center border-b-2 border-gray-100">
          <Image src={icons.sellCar} alt="newCar" width={31} height={30} />
          <h3 className="font14 font-medium">Jual Mobil</h3>
        </div>
        <div className="flex p-4 ml-10 gap-4 items-center border-b-2 border-gray-100">
          <Image src={icons.finance} alt="newCar" width={31} height={30} />
          <h3 className="font14 font-medium">Fasilitas Dana</h3>
        </div>
        <div className="flex p-4 ml-10 gap-4 items-center">
          <Image src={icons.other} alt="newCar" width={31} height={30} />
          <h3 className="font14 font-medium">Produk Lainnya</h3>
        </div>
      </div>
      <div className="col-span-9 border-l-2 border-gray-100">
        <Suspense fallback={<CarSkeleton length={4} />}>
          <CarsFetcher>
            <CarsData />
          </CarsFetcher>
        </Suspense>
      </div>
    </div>
  );
};

export default Car;
