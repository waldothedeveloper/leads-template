import { Card } from "./card";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export const StaticImages = () => {
  return (
    <div className="my-0 w-full h-full self-end relative overflow-hidden">
      {/* background  color image for xl devices only */}
      <div className="hidden xl:block xl:absolute xl:inset-0 xl:w-full xl:mt-20">
        <StaticImage
          loading="lazy"
          imgStyle={{
            height: "100%",
          }}
          src="../../images/patterns/colorful-up-resized.jpg"
          alt="background"
          placeholder="blurred"
          layout="fullWidth"
          transformOptions={{ fit: "cover" }}
        />
      </div>

      {/* image of ac worker */}

      <StaticImage
        aspectRatio={4 / 4}
        loading="lazy"
        className="z-10 transform -translate-x-44 md:-translate-x-64"
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
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        imgStyle={{
          objectPosition: "right",
          height: "100%",
          width: "100%",
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
