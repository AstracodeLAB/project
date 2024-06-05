import imgHero from '../assets/BgHero.png';

function Hero() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-between">
      <section className="flex justify-center items-center mt-7 w-full">
        <article className="w-full lg:w-4/5 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mx-10 lg:px-0">
          <div className="order-1 lg:order-2">
            <img className="h-auto rounded-full shadow-Hero-primary shadow-imgHeader" src={imgHero} alt="Hero Image" />
          </div>
          <div className="order-2 lg:order-1">
            <h1 className="mt-4 font-medium text-h1 text-secondary text-center lg:text-left">
              Astra<span className="text-accent">code</span>LAB Diseño web
            </h1>
            <p className="mt-4 textfont-semibold text-secondary text-center lg:text-left">
              En AstracodeLAB, proporcionamos una gama completa de servicios de desarrollo web, desde el concepto inicial hasta el lanzamiento y mantenimiento continuo. Nuestro objetivo es proporcionarte las herramientas necesarias para que puedas desarrollarte en el ámbito digital.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-accent font-bold flex mt-4 p-3 text-4xl rounded-full hover:bg-secondary hover:text-accent">
                CONTACTAR
              </button>
            </div>
          </div>
        </article>
      </section>
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 w-full h-0 
          border-l-[100vw] border-l-transparent
          border-b-[50px] border-b-secondary">
        </div>
      </div>
    </div>
  );
}

export default Hero;