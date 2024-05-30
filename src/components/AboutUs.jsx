import React from "react";
import about from "../assets/about.png";

export const AboutUs = () => {
  return (
    <>
      <section id="about" className="mx-30 my-15">
        <div className="absolute inset-6 z-0 h-4 bg-gradient-to-r from-lime-500 via-lime-200 to-white"></div>
        <h2 className="relative z-10 my-4 font-sans font-medium text-2xl">
          Sobre AstracodeLAB
        </h2>
        <div className="md:flex">
          <img
            className="rounded-full my-6 shadow-xl"
            src={about}
            alt="Tres programadoras con fondo espacial"
          />
          <article className="font-semibold font-sans text-sm border-2 border-black rounded-2xl px-4 py-2 shadow-xl">
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
