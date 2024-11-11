import { IBlog } from "@/types";
import Image from "next/image";
import React from "react";
type Props = {
  blog: IBlog;
};
const ArticleCard = ({ blog }: Props) => {
  return (
    <div className="flex gap-[10px] max-w-[398px]">
      <Image src={blog.image} width={180} height={72} alt={blog.title} />
      <div>
        <h3 className="text-[15px] font-medium">{blog.title}</h3>
        <p className="text-[12px] font-light text-blue-500">
          {blog.desc} .{" "}
          <span className="text-gray-400">
            {Date.now().toLocaleString("id")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
