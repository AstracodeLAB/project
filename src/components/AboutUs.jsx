import React from "react";
import about from "../assets/about.png";

export const AboutUs = () => {
  return (
    <>
      <section id="about" className="mx-30 my-15">
        <div className="">
          <h2 className="my-4 ">Sobre AstracodeLAB</h2>
        </div>
        <div className="md:flex">
          <img
            className="rounded-full my-6 shadow-xl"
            src={about}
            alt="Tres programadoras con fondo espacial"
          />
          <article className="border-2 border-black rounded-2xl px-4 py-2   shadow-xl">
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
