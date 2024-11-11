import React from "react";
type Props = {
  length: number;
};
const BlogSkeleton = ({ length }: Props) => {
  return (
    <div className="w-full flex gap-6 flex-wrap">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 rounded-md flex gap-2 w-[398px]"
        >
          <div className="animate-pulse h-[72px] w-[180px] bg-gray-300 rounded-md"></div>
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-300 w-full rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/4 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
