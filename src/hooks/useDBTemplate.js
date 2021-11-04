import { graphql, useStaticQuery } from "gatsby";

export const useDBTemplate = (addressProps) => {
  const finalData = {};
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "ACFIX-template" } }
        sort: { fields: data___id }
      ) {
        edges {
          node {
            data {
              type
              Question_Name
              Radio_type_choices
              id
              maxLength
              optional
              placeholder
              verification
              name
              inputmode
              pattern
              autocomplete
            }
          }
        }
      }
    }
  `);

  data.allAirtable.edges.map((elem, idx) => {
    return finalData[`quiz${idx + 1}`]
      ? null
      : (finalData[`quiz${idx + 1}`] = {
          type: elem.node.data.type,
          question: elem.node.data.Question_Name,
          choices: elem.node.data.Radio_type_choices,
          id: elem.node.data.id,
          errorMessage: null,
          verified: null,
          inputmode: elem.node.data.inputmode,
          pattern: elem.node.data.pattern,
          autocomplete: elem.node.data.autocomplete,
          verification: elem.node.data.verification,
          name: elem.node.data.name,
          maxLength: elem.node.data.maxLength,
          placeholder: elem.node.data.placeholder,
          optional: elem.node.data.optional,
          response:
            elem.node.data.verification === "zipcode" && addressProps?.address
              ? addressProps.address
              : null,
        });
  });

  return finalData;
};
