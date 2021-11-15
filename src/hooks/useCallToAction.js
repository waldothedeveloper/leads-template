import { graphql, useStaticQuery } from "gatsby";

export const useCallToAction = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCallToAction(filter: { leadType: { eq: "hvac" } }) {
        edges {
          node {
            header
            subheader
          }
        }
      }
    }
  `);
  return data.allContentfulCallToAction.edges[0].node;
};
