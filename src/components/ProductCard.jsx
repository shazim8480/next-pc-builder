import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({ product }) => (
  <Card
    style={{
      width: 300,
      height: 470,
    }}
    size="small"
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title={product?.name}
      description={product?.description}
    />
    <div>
      <p>{product?.status}</p>
      <p>{`Price: $${product?.price}`}</p>
      <p>Category : {product?.category}</p>
      <p>Rating : {product?.averageRating}</p>
    </div>

    <Link href={`/product/${product?.id}`}>
      <Button
        style={{ backgroundColor: "navy", borderColor: "navy", color: "azure" }}
        block
      >
        See Details
      </Button>
    </Link>
  </Card>
);
export default ProductCard;
