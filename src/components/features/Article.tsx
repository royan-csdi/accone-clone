import { IBlog } from "@/types";
import React from "react";
import ArticleCard from "./ArticleCard";

const masterData: IBlog[] = [
  {
    id: "1",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/oleh-oleh-batam.webp",
  },
  {
    id: "2",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/Banner-danau-toba.webp",
  },
  {
    id: "3",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/Banner-danau-toba.webp",
  },
  {
    id: "4",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/oleh-oleh-batam.webp",
  },
  {
    id: "5",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/Banner-danau-toba.webp",
  },
  {
    id: "6",
    title: "12 Oleh-oleh Khas Batam yang Wajib Dibawa Pulang!",
    desc: "Berita",
    content: "Pengumuman",
    image:
      "https://netimg.acc.co.id/ACCONE/CONTENT/DETAILNEWS/webp/oleh-oleh-batam.webp",
  },
];

const Article = () => {
  return (
    <div className="my-10">
      <div>
        <div className="flex justify-between items-center py-6">
          <h3 className="text-[21px] font-bold">Informasi Terkini</h3>
          <p className="text-[16px] font-medium text-blue-500">Lihat Lainnya</p>
        </div>
        <div className="flex gap-y-[33px] gap-x-[22px] flex-wrap justify-stretch">
          {masterData.map((blog: IBlog) => (
            <ArticleCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
