import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";

const CPUPage = ({ products }) => {
  const filteredProducts = products?.filter(
    (product) => product?.category === "cpu"
  );
  return (
    <Row gutter={32}>
      {filteredProducts?.map((product) => {
        return (
          <Col key={product?.id} className="gutter-row" span={6}>
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CPUPage;

CPUPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export async function getStaticPaths() {
//   const paths = products?.map((product) => ({ params: { id: product?.id } }));

//   return { paths, fallback: false };
// }

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/products");
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      products: data,
    },
  };
}
