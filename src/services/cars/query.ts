// import { NewsParams } from "@/types/news.type";
import { useQuery } from "@tanstack/react-query";
import { getCarDetail, getCars } from "./api";

export const newsSectionOptions = {
  queryKey: ["cars", "section"],
  queryFn: () => getCars(),
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await getCars();
      return response;
    },
  });
};

export const carsOptions = () => {
  return {
    queryKey: ["cars"],
    queryFn: () => getCars(),
  };
};

export const carsDetailOptions = (id: string) => {
  return {
    queryKey: ["cars", id],
    queryFn: () => getCarDetail(id),
  };
};
