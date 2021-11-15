import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils/classNames";
export const WorkDetails = ({ newData }) => {
  return (
    <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      {newData.map((post) => (
        <div key={post.id}>
          <div className="inline-block">
            <span
              className={classNames(
                post.color,
                "inline-flex items-center px-3 py-0.5 rounded-full text-base font-medium"
              )}
            >
              {post.id + 1}
            </span>
          </div>

          <div className="block mt-4">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

WorkDetails.propTypes = {
  newData: PropTypes.array,
};
