import ProductCard from "@/components/ProductCard";
import { Layout, Typography, Space, Row, Col } from "antd";
const { Content } = Layout;

const { Title } = Typography;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  marginTop: "50px",
  //   color: "#fff",
};

const titleStyle = {
  textAlign: "center",
  color: "darkblue",
};

const FeaturedProducts = ({ featuredProducts }) => {
  //   console.log(
  //     "🚀 ~ file: FeaturedProducts.jsx:19 ~ FeaturedProducts ~ productsData:",
  //     featuredProducts
  //   );
  return (
    <div>
      <Title style={titleStyle} level={2}>
        Featured Collections
      </Title>
      <Content style={contentStyle}>
        <Row gutter={32}>
          {featuredProducts?.map((product) => {
            return (
              <Col
                style={{ marginBottom: "30px" }}
                key={product?.id}
                className="gutter-row"
                span={6}
              >
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Content>
    </div>
  );
};

export default FeaturedProducts;
