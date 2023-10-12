import RootLayout from "@/layouts/RootLayout";
import FeaturedCategories from "@/layouts/UI/FeaturedCategories";
import FeaturedProducts from "@/layouts/UI/FeaturedProducts";

export default function HomePage({ featuredProducts }) {
  return (
    <main>
      <FeaturedProducts featuredProducts={featuredProducts} />
      <FeaturedCategories />
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/products");
  const productsData = await res.json();

  const featuredProducts = getRandomProducts(productsData, 6);

  return {
    props: {
      featuredProducts,
    },
  };
}

function getRandomProducts(data, count) {
  // Function to get a random subset of products
  const shuffled = data?.sort(() => 0.5 - Math.random());
  return shuffled?.slice(0, count);
}
