import { Address } from "../components/address";
import Layout from "../components/layout";
import React from "react";
import { UseTermsOfUse } from "../hooks/useTermsOfUse";

const TermsOfUse = () => {
  const data = UseTermsOfUse();

  return (
    <Layout>
      <div className="py-16 bg-blueGray-100 px-6">
        <div className="h-full text-base max-w-prose mx-auto space-y-6">
          <h1 className="text-2xl font-bold">TERMS OF USE</h1>
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

export default TermsOfUse;
