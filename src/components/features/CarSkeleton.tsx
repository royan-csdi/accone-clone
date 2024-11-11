import React from "react";
type Props = {
  length: number;
};
const CarSkeleton = ({ length }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-md">
          <div className="animate-pulse h-40 bg-gray-300 rounded-md"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 w-full rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/4 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarSkeleton;
