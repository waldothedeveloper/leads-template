import PropTypes from "prop-types";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//
export const HeroTestimonial = ({ testimonial }) => {
  return (
    <div className="absolute top-0 lg:left-4 -mt-16 lg:-mt-0 px-4">
      <div className="flex items-center">
        <div>
          <StaticImage
            className="inline-block"
            imgStyle={{
              borderRadius: 9999,
            }}
            formats={["AVIF", "WEBP", "AUTO"]}
            src="../../images/reviews/hero-testimonial.jpeg"
            alt="acfix partner"
            placeholder="blurred"
            layout="fixed"
            height={48}
            width={48}
            transformOptions={{ fit: "cover" }}
          />
        </div>
        <div className="ml-3">
          <p className="text-xs text-gray-700 max-w-xs font-medium">
            {testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};

HeroTestimonial.propTypes = {
  testimonial: PropTypes.string,
};
