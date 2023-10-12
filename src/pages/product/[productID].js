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
  const res = await fetch("http://localhost:3000/api/products");
  const productsData = await res.json();
  // console.log(productsData);

  const paths = productsData?.data?.map((product) => ({
    params: {
      productID: product?.id, // productID => same name as the file
    },
  }));

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
