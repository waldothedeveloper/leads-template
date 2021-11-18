import { Link } from "gatsby";
import React from "react";
// import { useTermsOfUse } from "../../hooks/useTermsOfUse";

const navLinks = [
  { id: 1, name: "Privacy Policy", href: "/privacy-policy" },
  { id: 2, name: "Terms of Use", href: "/terms-of-use" },
];

export const Footer = () => {
  // const data = useTermsOfUse();

  //
  return (
    <footer className="bg-blueGray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navLinks.map((item) => (
            <div key={item.id} className="px-5 py-2">
              {item.href.includes("https") ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-50 hover:text-gray-100"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="text-base text-gray-50 hover:text-gray-100"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-100">
          &copy; {new Date().getFullYear()} Originotes, LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
