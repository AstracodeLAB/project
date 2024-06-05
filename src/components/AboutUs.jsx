import React from "react";
import about from "../assets/about.png";

export const AboutUs = () => {
  return (
    <>
      <section id="about" className="mx-30 my-20 md:mx-100 md:my-52">
        <div className="relative z-0 md:w-3/4 ">
          <h2 className="relative z-10 inline-block bg-gradient-to-r from-accent via-lime-200 to-white font-sans font-medium text-xl md:text-4xl px-2 rounded">
            Sobre AstracodeLAB
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full my-6 shadow-xl w-60 h-60"
            src={about}
            alt="Tres programadoras con fondo espacial"
          />
          <article className="font-semibold font-sans text-sm border-2 border-black rounded-2xl p-4 my-2 mx-6 shadow-xl">
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ahfalfha
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
