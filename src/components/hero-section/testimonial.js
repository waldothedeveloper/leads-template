import PropTypes from "prop-types";
import React from "react";
export const HeroTestimonial = ({ testimonial }) => {
  return (
    <div className="absolute top-0 lg:left-4 -mt-16 lg:-mt-0 px-4">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=6&w=1170&q=80"
            alt=""
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
