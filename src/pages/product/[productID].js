import RootLayout from "@/layouts/RootLayout";
import { ProductDetails } from "@/layouts/UI/ProductDetails";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  // console.log();
  return (
    <div>
      <ProductDetails product={JSON.parse(product)} />
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  // const res = await fetch("http://localhost:3000/api/products");
  // const productsData = await res.json();
  // // console.log(productsData);

  // const paths = productsData?.data?.map((product) => ({
  //   params: {
  //     productID: product?.id, // productID => same name as the file
  //   },
  // }));
  const paths = [
    { params: { productID: "1" } },
    { params: { productID: "2" } },
    { params: { productID: "3" } },
    { params: { productID: "4" } },
    { params: { productID: "5" } },
    { params: { productID: "6" } },
    { params: { productID: "7" } },
    { params: { productID: "8" } },
    { params: { productID: "9" } },
    { params: { productID: "10" } },
    { params: { productID: "11" } },
    { params: { productID: "12" } },
    { params: { productID: "13" } },
    // ... other paths
  ];

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // context => receive the params from static paths
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?productID=${params?.productID}`
  );
  const product = await res.json();

  return {
    props: {
      product: JSON.stringify(product),
    },
    revalidate: 10,
  };
}
