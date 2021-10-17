import { graphql, useStaticQuery } from "gatsby";

export const useHero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHero(leadType: { eq: "hvac" }) {
        heroImage {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: AUTO
          )
        }
        leadingHeroText
        mindBlowingHeroText
        nearYouHeroText
        testimonial
        phoneNumber
      }
    }
  `);
  return data.contentfulHero;
};
