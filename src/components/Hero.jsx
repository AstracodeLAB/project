import imgHero from "../assets/BgHero.png";

function Hero() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-between">
      <section className="flex justify-center items-center mt-7 w-full">
        <article className="w-2/3 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="order-1 lg:order-2">
            <img
              className="h-auto rounded-full shadow-Hero-primary"
              src={imgHero}
              alt="Hero Image"
            />
        <article className="w-full lg:w-4/5 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center mx-10 lg:px-0 lg:mx-32 ">
          <div className="order-1 lg:order-2 flex justify-center">
            <img className="h-auto rounded-full shadow-Hero-primary shadow-shadowWhite lg:max-w-[80%] lg:max-h-[80%]" src={imgHero} alt="Hero Image" />
          </div>
          <div className="order-2 lg:order-1">
            <h1 className="mt-4 font-medium text-h1 text-secondary text-center lg:text-left lg:text-h1lg">
              Astra<span className="text-accent">code</span>LAB Diseño web
            </h1>
            <p className="mt-4 font-semibold text-secondary text-center lg:text-left">
              En AstracodeLAB, proporcionamos una gama completa de servicios de
              desarrollo web, desde el concepto inicial hasta el lanzamiento y
              mantenimiento continuo. Nuestro objetivo es proporcionarte las
              herramientas necesarias para que puedas desenvolverte en el mundo
              digital.
            <p className="mt-4 textfont-semibold text-secondary text-center lg:text-left lg:text-lg lg:mt-6">
              En AstracodeLAB, proporcionamos una gama completa de servicios de desarrollo web, desde el concepto inicial hasta el lanzamiento y mantenimiento continuo. Nuestro objetivo es proporcionarte las herramientas necesarias para que puedas desarrollarte en el ámbito digital.
            </p>
            <div className="flex justify-center lg:mt-6">
              <button className="bg-accent font-bold flex mt-4 p-3 text-4xl rounded-full hover:bg-secondary hover:text-accent lg:p-4 ">
                CONTACTAR
              </button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div
          className="w-full h-0 
          border-7 border-solid border-secondary
          border-l-[100vw] border-l-transparent
          border-b-[50px] border-b-secondary"
        ></div>
      </section>
      <div className="relative w-full mt-12 lg:m-0">
        <div className="bottom-0 left-0 w-full h-0 
          border-l-[100vw] border-l-transparent
          border-b-[50px] border-b-secondary lg:border-b-[180px]">
        </div>
      </div>
    </div>
  );
}

export default Hero;