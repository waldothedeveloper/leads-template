import Layout from "../components/layout";
import React from "react";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <div className="my-32 flex space-x-12">
          <p className="text-5xl text-cyan-500">begin</p>
          <p className="text-5xl text-cyan-500">continue</p>
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
