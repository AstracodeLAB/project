//import React from "react";
import about from "../assets/about.png";

export const AboutUs = () => {
  return (
    <>
      <section id="about" className="mx-30 my-15">
        <div className="relative top-10 z-0 h-4 bg-gradient-to-r from-lime-500 via-lime-200 to-white md:h-7"></div>
        <h2 className="relative z-10 my-4 font-sans font-medium text-2xl md:text-4xl">
          Sobre AstracodeLAB
        </h2>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full my-6 shadow-xl size-60"
            src={about}
            alt="Tres programadoras con fondo espacial"
          />
          <article className="font-semibold font-sans text-sm border-2 border-black rounded-2xl px-4 py-2 shadow-xl">
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ahfalfha
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
