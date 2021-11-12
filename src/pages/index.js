import { CallToAction } from "../components/call-to-action";
import { Hero } from "../components/hero-section/hero";
import { HowItWorks } from "../components/how-it-works/how-it-works";
import { HowWeProtect } from "../components/consumer-pro-protection/how-we-protect";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { SocialProof } from "../components/social-proof";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const image = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;

  //
  return (
    <main>
      <Layout>
        <SEO
          title="AC contractors near you with mind-blowing expertise."
          lang="en"
          description="ACFIX is the effortless way to compare quotes from highly merited HVAC companies near you. We work with the best experts in your area to get the job done right!. Don't settle for anything less than the best. Browse local deals. We work only with licensed and certified HVAC technicians."
          defaultImage={image}
        />
        <Hero />
        <SocialProof />
        <HowItWorks />
        <CallToAction />
        <HowWeProtect />
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allFile(filter: { name: { eq: "minified-acfix-partner-15" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
export default IndexPage;
