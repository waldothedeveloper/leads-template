import { graphql, useStaticQuery } from "gatsby";

export const useFeaturedCustomer = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulFeaturedTestimonial {
        customerLocation
        testimonial {
          testimonial
        }
        customerImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: AUTO
          )
        }
      }
    }
  `);
  return data.contentfulFeaturedTestimonial;
};
