import { DottedSVG } from "./dotted-svg";
import { HeroEstimates } from "./estimates";
import { HeroImage } from "./hero-image";
import { HeroTestimonial } from "./testimonial";
import { HeroTitle } from "./hero-title";
import React from "react";
import { YellowBlob } from "./yellow-blob";
import { ZipCodeInput } from "../verify-zipcode/input";
import { useHero } from "../../hooks/useHero";
export const Hero = () => {
  const {
    leadingHeroText,
    mindBlowingHeroText,
    nearYouHeroText,
    testimonial,
    heroImage,
    phoneNumber,
  } = useHero();

  //
  return (
    <div className="bg-blueGray-100 pb-8 sm:pb-12 lg:pb-12 relative">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 relative">
          {/* customer testimonials */}
          <HeroTestimonial testimonial={testimonial} />

          <div className="mt-20">
            {/* phone number with free estimates logo */}
            <HeroEstimates phoneNumber={phoneNumber} />
            <div className="mt-6 sm:max-w-xl relative z-10">
              <YellowBlob />
              {/* hero title */}
              <HeroTitle
                leadingHeroText={leadingHeroText}
                nearYouHeroText={nearYouHeroText}
                mindBlowingHeroText={mindBlowingHeroText}
              />
            </div>
            {/* zipcode component */}
            <ZipCodeInput />
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              {/* little cyan background behind image */}
              <div className="absolute inset-y-0 left-1/2 w-screen bg-cyan-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <DottedSVG />
            </div>
            <HeroImage heroImage={heroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
