import { graphql, useStaticQuery } from "gatsby";

export const useDBTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "ACFIX-template" } }) {
        edges {
          node {
            data {
              type
              Question_Name
              Radio_type_choices
            }
          }
        }
      }
    }
  `);
  return data.allAirtable.edges;
};
