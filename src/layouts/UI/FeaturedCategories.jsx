import ProductCard from "@/components/ProductCard";
import { Layout, Typography, Space, Row, Col, Card } from "antd";
import { useRouter } from "next/router";
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

const FeaturedCategories = () => {
  const router = useRouter();
  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "psu",
    "storage",
    "monitor",
    "others",
  ];

  //    onclick cat card
  const handleCategoryClick = (category) => {
    console.log("category", category);
    router.push(`/category/${category}`);
  };

  return (
    <div>
      <Title style={titleStyle} level={2}>
        Featured Categories
      </Title>
      <Content style={contentStyle}>
        <Row justify={"center"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {categories?.map((cat, index) => {
            return (
              <Col
                className="gutter-row"
                style={{ marginBottom: "30px" }}
                key={index}
                span={4}
              >
                <Card
                  onClick={() => handleCategoryClick(cat)}
                  hoverable={true}
                  bordered={false}
                  style={{
                    backgroundColor: "#00072D",
                    color: "azure",
                  }}
                >
                  <p>{cat?.toLocaleUpperCase()}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
    </div>
  );
};

export default FeaturedCategories;
