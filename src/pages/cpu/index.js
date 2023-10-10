import RootLayout from "@/layouts/RootLayout";
import React from "react";

const CPUPage = () => {
  return (
    <div>
      <h1>This is CPU Page</h1>
    </div>
  );
};

export default CPUPage;

CPUPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
