import { CallToAction } from "../components/call-to-action";
import { FeaturedTestimonial } from "../components/featured-testimonial";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/how-it-works";
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
      </Layout>
    </main>
  );
};

export default IndexPage;
