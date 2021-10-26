import { CallToAction } from "../components/call-to-action";
import { Hero } from "../components/hero-section/hero";
import { HowItWorks } from "../components/how-it-works/how-it-works";
import { HowWeProtect } from "../components/consumer-pro-protection/how-we-protect";
import Layout from "../components/layout";
import React from "react";
import { SocialProof } from "../components/social-proof";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <CallToAction />
        <HowWeProtect />
      </Layout>
    </main>
  );
};

export default IndexPage;
