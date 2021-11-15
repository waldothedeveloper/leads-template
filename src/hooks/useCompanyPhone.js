import { graphql, useStaticQuery } from "gatsby";

export const useCompanyPhone = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHero(leadType: { eq: "hvac" }) {
        phoneNumber
      }
    }
  `);
  return data.contentfulHero;
};
