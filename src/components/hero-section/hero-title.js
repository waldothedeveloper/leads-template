import PropTypes from "prop-types";
import React from "react";

export const HeroTitle = ({
  leadingHeroText,
  mindBlowingHeroText,
  nearYouHeroText,
}) => {
  return (
    <h1 className="text-4xl font-extrabold text-blueGray-900 tracking-tight sm:text-5xl">
      {leadingHeroText}
      {` `}
      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
        {mindBlowingHeroText}
        {` `}
      </span>
      {` `}
      {nearYouHeroText}
    </h1>
  );
};

HeroTitle.propTypes = {
  leadingHeroText: PropTypes.string,
  mindBlowingHeroText: PropTypes.string,
  nearYouHeroText: PropTypes.string,
};
