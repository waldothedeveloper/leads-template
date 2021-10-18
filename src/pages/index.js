import { CallToAction } from "../components/call-to-action";
import { FeaturedTestimonial } from "../components/featured-testimonial";
import { Hero } from "../components/hero-section/hero";
import { HowItWorks } from "../components/how-it-works/how-it-works";
import { HowWeProtect } from "../components/consumer-pro-protection/how-we-protect";
import Layout from "../components/layout";
import React from "react";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <CallToAction />
        <HowItWorks />
        <FeaturedTestimonial />
        <HowWeProtect />
      </Layout>
    </main>
  );
};

export default IndexPage;
