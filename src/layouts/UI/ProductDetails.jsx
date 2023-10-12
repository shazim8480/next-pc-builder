import { Col, Row, Typography } from "antd";
import Image from "next/image";
const { Title, Paragraph, Text } = Typography;

export const ProductDetails = ({ product }) => {
  return (
    <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {/* product img */}
      <Col style={{ height: "100vh" }} span={12}>
        <Image
          width={500}
          height={900}
          src={
            "https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="pc-part"
          layout="responsive"
        />
      </Col>
      {/* product Description */}
      <Col style={{ height: "100vh" }} span={12}>
        <Title level={2}>{product?.name}</Title>
        <Row>
          <Text style={{ marginBottom: "10px" }} type="success">
            {product?.status}
          </Text>
        </Row>
        <Paragraph>{product?.description}</Paragraph>
        <Title level={5}>Key Features</Title>
        {product?.keyFeatures?.map((feat, idx) => {
          return <Paragraph key={idx}>{feat}</Paragraph>;
        })}
        <Title level={5}>{`Price: $${product?.price}`}</Title>
        <Paragraph>Category : {product?.category}</Paragraph>
        <Paragraph>Rating : {product?.averageRating}</Paragraph>
      </Col>
    </Row>
  );
};
