import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return <main></main>;
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
