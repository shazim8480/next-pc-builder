import React from "react";
import { Breadcrumb, Dropdown, Layout, Menu, Space, theme } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const router = useRouter();

  // Handle menu item selection
  const handleMenuClick = (e) => {
    const { key } = e;
    router.push(`/category/${encodeURIComponent(key)}`);
  };

  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "psu",
    "storage",
    "monitor",
    "others",
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <div className="demo-logo" /> */}

        <Link href="/">
          <items
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "700",
              fontSize: 20,
              marginRight: 25,
            }}
          >
            NEXT PC Builder
          </items>
        </Link>
        <Menu title="Categories" theme="dark" mode="horizontal">
          <Menu.SubMenu key="categories-dropdown" title="Categories">
            {categories?.map((category) => (
              <Menu.Item key={category} onClick={handleMenuClick}>
                {category.toLocaleUpperCase()}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu>
        <Link href="/pc-builder">
          <items
            style={{
              margin: "0px 25px",
            }}
          >
            PC Builder
          </items>
        </Link>
      </Header>
      <Content>
        <div
          // className="site-layout-content"
          style={{
            background: "azure",
            height: "100vh",
            padding: "20px",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Next PC Builder ©2023
      </Footer>
    </Layout>
  );
};
export default RootLayout;
