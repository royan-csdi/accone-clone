import { getQueryClient } from "@/lib/get-query-client";
import { carsOptions } from "@/services/cars/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
  params?: any;
};

const CarsFetcher = async ({ children, params }: Props) => {
  let queryClient;
  try {
    queryClient = getQueryClient();
    await queryClient.fetchQuery(carsOptions());
  } catch (error) {
    console.log("error", error);

    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default CarsFetcher;
