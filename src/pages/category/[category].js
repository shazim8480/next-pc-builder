import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layouts/RootLayout";
import { Col, Row } from "antd";

const CategoryPage = ({ category, categoryProducts }) => {
  return (
    <Row gutter={32}>
      {categoryProducts?.map((product) => {
        return (
          <Col key={product?.id} className="gutter-row" span={6}>
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  // Generate paths at build time based on available categories
  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "psu",
    "storage",
    "monitor",
    "others",
  ];

  const paths = categories?.map((category) => ({
    params: { category: encodeURIComponent(category) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:8000/products");
  const productsData = await res.json();

  const { category } = params;

  // Fetch products based on the selected category
  const categoryProducts = productsData?.filter(
    (product) => product?.category === category
  );

  return {
    props: {
      category,
      categoryProducts,
    },
  };
}
