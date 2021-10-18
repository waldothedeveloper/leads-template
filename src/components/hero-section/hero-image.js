import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
export const HeroImage = ({ heroImage }) => {
  return (
    <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
      <GatsbyImage
        className="w-full shadow-xl rounded-md ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
        image={heroImage.gatsbyImageData}
        alt=""
      />
    </div>
  );
};

HeroImage.propTypes = {
  heroImage: PropTypes.object,
};
