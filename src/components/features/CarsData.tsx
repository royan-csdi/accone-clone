"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CarCard from "./CarCard";
import { carsOptions } from "@/services/cars/query";
import { Button } from "../ui/button";

const CarsData = () => {
  const { data } = useSuspenseQuery(carsOptions());
  const [dataCar, setDataCar] = useState(data.data);
  const [isNew, setIsNew] = useState(true);

  const handleFilterCar = (isNew: boolean) => {
    setIsNew(isNew);
    const filtered = data.data.filter((car) => car.isNew === isNew);
    setDataCar(filtered);
  };
  return (
    <>
      <div className="p-2 flex gap-2">
        <Button
          variant={"ghost"}
          className={`${isNew ? "border-b-4 border-blue-500" : ""}`}
          onClick={() => handleFilterCar(true)}
        >
          Baru
        </Button>
        <Button
          variant={"ghost"}
          className={`${isNew ? "" : "border-b-4 border-blue-500"}`}
          onClick={() => handleFilterCar(false)}
        >
          Bekas
        </Button>
      </div>
      <div className="flex overflow-x-scroll gap-6 p-4">
        {dataCar.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default CarsData;
