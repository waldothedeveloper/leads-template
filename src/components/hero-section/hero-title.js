import PropTypes from "prop-types";
import React from "react";

export const HeroTitle = ({ leadingHeroText, mindBlowingHeroText }) => {
  return (
    <h1 className="text-4xl font-extrabold text-blueGray-900 tracking-tight sm:text-5xl">
      {leadingHeroText}
      {` `}
      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
        mind-blowing
        {` `}
      </span>
      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
        experience
      </span>
      {` `}
      near you
    </h1>
  );
};

HeroTitle.propTypes = {
  leadingHeroText: PropTypes.string,
  mindBlowingHeroText: PropTypes.string,
};
