import { ReturnResponse, SingleResponse } from "@/types/common.type";
import satellite from "../satellite";
import { ICar } from "@/types/index";

export const getCars = async () => {
  const res = await satellite.get<ReturnResponse<ICar>>("/cars");

  return res.data;
};

export const getCarDetail = async (id: string) => {
  try {
    const res = await satellite.get<SingleResponse<ICar>>(`/cars/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
