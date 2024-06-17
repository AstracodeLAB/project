import about from '../assets/about.png';

export const AboutUs = () => {
	return (
		<>
			<section id='about' className='m-5 mt-20 md:mx-16 lg:mx-28 '>
				<div className='relative z-0 md:w-3/4 max-w-screen-lg '>
					<h2 className='elative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
						Sobre AstracodeLAB
					</h2>
				</div>
				<div className='flex flex-col items-center my-2 md:flex-row md:justify-center md:my-10 md:gap-6 lg:gap-12'>
					<img
						className='rounded-full w-5/6 my-6 shadow-xl md:w-1/2 lg:w-1/3'
						src={about}
						alt='Tres programadoras con fondo espacial'
					/>
					<article className='font-sans text-terciary text-m border-4 border-black rounded-2xl p-3 my-2 mx-6 shadow-xl md:m-0 md:w-1/2 lg:w-1/2 '>
						<p className='my-3 lg:text-xl lg:p-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. ahfalfha
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
