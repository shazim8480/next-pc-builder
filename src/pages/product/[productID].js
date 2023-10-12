import RootLayout from "@/layouts/RootLayout";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  return <div>This is {product?.name} details page</div>;
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8000/products");
  const productsData = await res.json();

  const paths = productsData?.map((product) => ({
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
    `http://localhost:8000/products/${params?.productID}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
