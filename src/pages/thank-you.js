import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
/* This example requires Tailwind CSS v2.0+ */
const offers = [
  {
    name: "Download the app",
    description: "Get an exclusive $5 off code",
    href: "#",
  },
  {
    name: "Return when you're ready",
    description: "60 days of free returns",
    href: "#",
  },
  {
    name: "Sign up for our newsletter",
    description: "15% off your first order",
    href: "#",
  },
];

const ThankYou = () => {
  return (
    <Layout>
      <div className="bg-blueGray-100 md:pt-12">
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="max-w-7xl mx-auto lg:px-8">
              <ul className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
                {offers.map((offer) => (
                  <li key={offer.name} className="flex flex-col">
                    <a
                      href={offer.href}
                      className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                    >
                      <p className="text-sm text-gray-500">{offer.name}</p>
                      <p className="font-semibold text-gray-900">
                        {offer.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="relative md:mt-16">
            <div
              aria-hidden="true"
              className="hidden absolute w-1/2 h-full bg-blueGray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      You'll soon receive a phone call
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      Our team will contact you soon to schedule a consult with
                      one of our HVAC partners. Now that we've verified your
                      information, it's time to do the fun part.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/quiz-conversion"
                        className="inline-block bg-gradient-to-r from-teal-500 to-cyan-700 border border-transparent py-3 px-8 rounded-md font-medium text-white"
                      >
                        Start Over
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
              <StaticImage
                src="../images/call-rep-minified.jpg"
                alt="One of AC-FIX call support representatives"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
