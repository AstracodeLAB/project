import imgHero from '../assets/BgHero.png';

function Hero() {
  return (<>
    {/* <div className=" relative min-h-[80vh] flex flex-col justify-between "> */}
      {/* <section className="flex justify-center items-center">  */}
        <article className=" flex flex-col justify-center items-center px-2 mb-5 lg:grid lg:grid-cols-2 lg:gap-30 lg:justify-items-center lg:items-center m-5">
          <div className="order-1 lg:order-2 sm:max-w-[600px] lg:max-w-[500px] mb-5">
            <img className="h-auto rounded-full shadow-Hero-primary shadow-shadowWhite lg:max-w-[80%] lg:max-h-[80%] lg:min-w-[500px]" src={imgHero} alt="Hero Image" />
          </div>
          <div className="order-2 m-5 px-2 mb-5  lg:order-1 sm:max-w-[600px] lg:max-w-[600px] ">
            <h1 className="mt-4 font-medium text-h1 text-secondary text-center lg:text-left lg:text-h1lg min-w-fit">
              Astra<span className="text-accent">code</span>LAB Diseño web
            </h1>
            <p className="mt-4 text-justify text-m lg:text-xl text-secondary px-2 mb-5 lg:text-left">
              En AstracodeLAB, proporcionamos una gama completa de servicios de
              desarrollo web, desde el concepto inicial hasta el lanzamiento y
              mantenimiento continuo. Nuestro objetivo es proporcionarte las
              herramientas necesarias para que puedas desenvolverte en el mundo
              digital.
              </p>
            <div className="flex justify-center lg:mt-6 mb-4">
              <button className="bg-accent font-bold flex mt-4 p-3 text-4xl rounded-full hover:bg-secondary hover:text-accent md:p-4  ">
                CONTACTAR
              </button>
            </div>
          </div>
        </article>
      {/* </section> */}
    {/* </div> */}
      <div
          className="  h-0 
          border-7 border-solid border-white
          border-l-[97vw] border-l-transparent
          border-b-[50px] border-b-white
          ">
          </div>
    </>
  );
}

export default Hero;
