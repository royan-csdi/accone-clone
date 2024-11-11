import React from "react";
import { ICar } from "@/types/index";
import Image from "next/image";
type Props = {
  car: ICar;
};

const logoSEVA =
  "https://www.acc.co.id/accone/img/acccoid_Homepage_CW.logoseva.png";
const CarCard = ({ car }: Props) => {
  return (
    <div className={`shadow-lg rounded-md min-w-[235px] flex flex-col h-full`}>
      <Image
        src={car.image}
        width={235}
        height={160}
        alt={car.name}
        className="w-[235px] h-[160px] border-b-2 border-gray-100 flex-1"
      />
      {car.isNew ? (
        <>
          <h3 className="pt-[10px] px-[12px] text-[16px] font-bold flex-1">
            {car.name}
          </h3>
          <div className="flex justify-end items-end p-3 self-end">
            <Image src={logoSEVA} alt="logoSEVA" width={87} height={47} />
          </div>
        </>
      ) : (
        <>
          <h3 className="pt-[10px] px-[12px] text-[16px] font-bold">
            {car.name}
          </h3>
          <h4 className="px-[12px] text-[16px] font-bold text-blue-500">
            Rp. {car.price}{" "}
            <span className="text-[16px] font-light text-gray-500">/bln</span>
          </h4>
          <span className="text-[12px] text-gray-400 font-light px-[12px]">
            Bayar Pertama mulai dari Rp 10.800.000
          </span>
          <p className="px-[12px] text-[12px] pb-10 pt-4">
            {car.variant} | {car.model} | km 50000
          </p>
        </>
      )}
    </div>
  );
};

export default CarCard;
