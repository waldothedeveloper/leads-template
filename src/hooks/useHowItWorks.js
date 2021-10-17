import { graphql, useStaticQuery } from "gatsby";

export const useHowItWorks = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHowItWorks(filter: { leadType: { eq: "hvac" } }) {
        edges {
          node {
            subheader
            step1
            step2
            step3
            title1
            title2
            title3
          }
        }
      }
    }
  `);
  const { title1, title2, title3, step1, step2, step3, subheader } =
    data.allContentfulHowItWorks.edges[0].node;
  const newData = [
    {
      id: 0,
      color: "bg-rose-100 text-rose-800",
      title: title1,
      description: step1,
    },
    {
      id: 1,
      color: "bg-teal-100 text-teal-800",
      title: title2,
      description: step2,
    },
    {
      id: 2,
      color: "bg-yellow-100 text-yellow-800",
      title: title3,
      description: step3,
    },
  ];

  return { newData, subheader };
};
