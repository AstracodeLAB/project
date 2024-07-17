import about from '../assets/about.png';

export const AboutUs = () => {
	return (
		<>
			<section id='about' className='m-5 mt-mSections md:mx-16 lg:mx-28 '>
				<div className='relative z-0 md:w-3/4 '>
					<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
						Sobre AstracodeLAB
					</h2>
				</div>
				<div className='flex flex-col items-center py-4 px-2 md:flex-row md:justify-center md:my-2 md:gap-6 lg:gap-12'>
					<img
						className='rounded-full w-5/6 my-6 shadow-xl md:w-1/2 lg:w-1/3'
						src={about}
						alt='Tres programadoras con fondo espacial'
					/>
					<article
						className='font-sans text-terciary text-m border-4 border-black rounded-2xl p-3 my-2  shadow-xl
					 md:m-0 md:w-1/2 lg:w-1/2 lg:ml-12'
					>
						<p className='my-3 lg:text-xl lg:p-5'>
							Nuestro proyecto nació de la idea de crear diseños web originales y personalizados que se adapten a las
							necesidades de nuestros clientes.
						</p>
						<p className='my-3 lg:text-xl lg:p-5'>
							¿Cómo lo conseguimos? Combinando nuestras experiencias adquiridas en diferentes sectores siendo nuestro
							nexo de unión la tecnología. Cada proyecto es una nueva aventura para nosotras.{' '}
						</p>
						<p className='my-3 lg:text-xl lg:p-5'>
							Valoramos la comunicación abierta y trabajamos estrechamente con nuestros clientes para asegurarnos de que
							sus ideas se conviertan en realidad.{' '}
						</p>
						<p className='my-3 lg:text-xl lg:p-5'>
							Nuestros valores van más allá: como mujeres en tecnología, nos dedicamos activamente a promover la
							diversidad en nuestro campo. Valoramos y apoyamos la inclusión de mujeres y personas de diversos
							colectivos en todas las facetas de nuestro trabajo.{' '}
						</p>
						<p className='my-3 lg:text-xl lg:p-5'>
							Ya sea que necesites un sitio web, crear tu página de marca, configurar un blog o diseñar un portafolio,
							estamos aquí para convertir tus ideas en realidad. ¡<a href="#contact" className='hover:text-accent font-bold'>Contáctanos</a> y cuéntanos tu idea!
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
