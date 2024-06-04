import imgHero from '../assets/BgHero.png';

function Hero () {
  return (
    <div>
      <section className="flex justify-center items-center mt-7 w-full ">
        <article className="w-2/3  "> 
          <img className="h-auto rounded-full shadow-Hero-primary" src={imgHero} alt="Hero Image" />
          <h1 className='mt-4 font-medium text-6xl text-secondary text-center'>Astra<span className="text-accent">code</span>LAB Diseño web</h1>
          <p className='mt-4 font-semibold text-secondary text-center'>En AstracodeLAB, proporcionamos una gama completa de servicios de desarrollo web, desde el concepto inicial hasta el lanzamiento y mantenimiento continuo. Nuestro objetivo es proporcionarte las herramientas necesarias para que puedas desenvolverte en el mundo digital.</p>
          <div className='flex justify-center'>
            <button className='bg-accent font-bold flex mt-4 p-3 text-4xl rounded-full'>CONTACTAR</button>
          </div>
          
        </article>
        
      </section>
      <section>
        <div className="w-full h-0 
          border-7 border-solid border-secondary
          border-l-[100vw] border-l-transparent
          border-b-[50px] border-b-secondary">
          
        </div>
        

        
  
      </section>
    </div>
  );
}
  export default Hero;