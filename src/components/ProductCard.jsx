import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Image from "next/image";
const { Meta } = Card;

const ProductCard = ({ product }) => (
  <Card
    style={{
      width: 300,
    }}
    size="small"
    cover={
      <Image
        alt="example"
        width={50}
        height={50}
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
  </Card>
);
export default ProductCard;
