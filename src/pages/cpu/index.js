import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import React from "react";

const CPUPage = () => {
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default CPUPage;

CPUPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();
  console.log(products);
  return { props: { products } };
}
