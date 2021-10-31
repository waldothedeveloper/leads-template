import { graphql, useStaticQuery } from "gatsby";

export const useTermsOfUse = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFooter {
        edges {
          node {
            termsOfUse {
              raw
            }
          }
        }
      }
    }
  `);
  return data.allContentfulFooter.edges;
};
