import { graphql, useStaticQuery } from "gatsby";

export const UseTermsOfUse = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulTermsOfUse {
        termsOfUse {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);
  return data.contentfulTermsOfUse.termsOfUse.childMarkdownRemark.html;
};
