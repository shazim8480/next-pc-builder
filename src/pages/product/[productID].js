import RootLayout from "@/layouts/RootLayout";
import { ProductDetails } from "@/layouts/UI/ProductDetails";
import React from "react";

const ProductDetailsPage = (props) => {
  // console.log();
  return (
    <div>
      <ProductDetails product={props?.product} />
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
  // console.log("static paths data", productsData);

  const paths = productsData?.data?.map((product) => ({
    params: {
      productID: product?.id, // productID => same name as the file
    },
  }));

  // console.log("static paths data", paths);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // context => receive the params from static paths
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?productID=${params?.productID}`
  );

  const product = await res.json();
  console.log("get prod", product);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}
