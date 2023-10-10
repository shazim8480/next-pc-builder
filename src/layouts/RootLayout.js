import React from "react";
import { Breadcrumb, Dropdown, Layout, Menu, Space, theme } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link href="/cpu">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          CPU / Processor
        </items>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/motherboard">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          MotherBoard
        </items>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/ram">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          RAM
        </items>
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href="/psu">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          PSU
        </items>
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link href="/storage">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          Storage Device
        </items>
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link href="/monitor">
        <items
          style={{
            margin: "0px 25px",
          }}
        >
          Monitor
        </items>
      </Link>
    ),
  },
];

const RootLayout = ({ children }) => {
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
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // className={{
          //   fontSize: "18px",
          //   textDecoration: "none",
          //   color: "white",
          // }}
        >
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
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Link href="/pcBuilder">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              PC Builder
            </items>
          </Link>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 10px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height: "100vh",
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
