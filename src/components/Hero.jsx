import imgHero from "../assets/BgHero.png";

function Hero() {
  return (
    <div>
      <section className="flex justify-center items-center mt-7 w-full">
        <article className="w-2/3 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="order-1 lg:order-2">
            <img
              className="h-auto rounded-full shadow-Hero-primary"
              src={imgHero}
              alt="Hero Image"
            />
          </div>
          <div className="order-2 lg:order-1">
            <h1 className="mt-4 font-medium text-6xl text-secondary text-center lg:text-left">
              Astra<span className="text-accent">code</span>LAB Diseño web
            </h1>
            <p className="mt-4 font-semibold text-secondary text-center lg:text-left">
              En AstracodeLAB, proporcionamos una gama completa de servicios de
              desarrollo web, desde el concepto inicial hasta el lanzamiento y
              mantenimiento continuo. Nuestro objetivo es proporcionarte las
              herramientas necesarias para que puedas desenvolverte en el mundo
              digital.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-accent font-bold flex mt-4 p-3 text-4xl rounded-full">
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
    </div>
  );
}

export default Hero;
