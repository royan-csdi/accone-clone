import Home from "@/components/features/home/Home";
import MainLayout from "@/components/layouts/MainLayout";
import { envClient } from "@/lib/env";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kredit Mobil & Fasilitas Dana - ACC",
  alternates: {
    canonical: envClient.SITE_URL + "/",
  },
};

export const revalidate = 10;

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
