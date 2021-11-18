import { Address } from "../components/address";
import Layout from "../components/layout";
import React from "react";
import { usePrivacyPolicy } from "../hooks/usePrivacyPolicy";

const PrivacyPolicy = () => {
  const data = usePrivacyPolicy();

  return (
    <Layout>
      <div className="py-16 bg-blueGray-100 px-6">
        <div className="h-full text-base max-w-prose mx-auto space-y-6">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{
              __html: data,
            }}
            aria-hidden="true"
          />
          <Address />
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
