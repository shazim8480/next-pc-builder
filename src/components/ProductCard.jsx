import { Avatar, Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  // console.log("logged prd", product);

  return (
    <Card
      style={{
        width: 300,
        height: 505,
      }}
      size="small"
      cover={
        <Image
          width={300}
          height={120}
          src={
            "https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="pc-part"
          layout="responsive"
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
          style={{
            backgroundColor: "navy",
            borderColor: "navy",
            color: "azure",
          }}
          block
        >
          See Details
        </Button>
      </Link>
    </Card>
  );
};
export default ProductCard;
