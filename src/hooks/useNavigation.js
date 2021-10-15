import { graphql, useStaticQuery } from "gatsby";

export const useNavigation = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulNavigation(logo: { eq: "ACFIX.TODAY" }) {
        id
        motto
        logo
        phoneNumber
      }
    }
  `);
  return data.contentfulNavigation;
};
