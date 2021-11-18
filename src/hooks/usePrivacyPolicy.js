import { graphql, useStaticQuery } from "gatsby";

export const usePrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPrivacyPolicy {
        privacyPolicy {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);
  return data.contentfulPrivacyPolicy.privacyPolicy.childMarkdownRemark.html;
};
