import { graphql, useStaticQuery } from "gatsby";

export const useNavigation = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulNavigation(leadType: { eq: "hvac" }) {
        id
        motto
        logo
        phoneNumber
      }
    }
  `);
  return data.contentfulNavigation;
};
