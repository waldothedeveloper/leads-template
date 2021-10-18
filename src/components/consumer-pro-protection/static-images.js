import { Card } from "./card";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export const StaticImages = () => {
  return (
    <div className="my-0 w-full h-full self-end relative overflow-hidden">
      {/* background  color image for xl devices only */}
      <StaticImage
        className="hidden xl:block xl:absolute xl:inset-0 xl:w-full xl:mt-20"
        imgStyle={{
          height: "100%",
        }}
        src="../../images/patterns/colorful-up-resized.jpg"
        alt="background"
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{ fit: "cover" }}
      />

      {/* image of ac worker */}
      <StaticImage
        className="aspect-w-3 aspect-h-4 md:aspect-w-2 md:aspect-h-2 z-10"
        imgStyle={{
          objectPosition: "right",
          height: "100%",
        }}
        src="../../images/acfix-partners/ac-guy-2_adobespark.png"
        alt="young ac guy writing down a customer project by AC FIX"
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{ fit: "cover" }}
      />
      {/* bg colorful image for small and medium devices only */}
      <StaticImage
        className="z-0 absolute inset-0 md:transform md:-translate-y-6 xl:hidden"
        imgStyle={{
          objectPosition: "right",
          height: "100%",
        }}
        src="../../images/patterns/colorful-removed-bg-resized.png"
        alt="colorful image for AC FIX today"
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{ fit: "cover" }}
      />

      <div className="absolute top-0 left-1/2 z-20 transform -translate-x-28 md:-translate-x-0 max-w-xs xl:max-w-sm mx-auto w-full">
        <Card />
      </div>
    </div>
  );
};
