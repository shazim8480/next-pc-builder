import RootLayout from "@/layouts/RootLayout";

export default function HomePage() {
  return <main></main>;
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
