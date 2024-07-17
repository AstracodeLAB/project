import { useState } from 'react';

export const Services = () => {
	const [activeServiceIndex, setActiveServiceIndex] = useState(null);

	const handleToggle = (serviceIndex) => {
		setActiveServiceIndex(activeServiceIndex === serviceIndex ? null : serviceIndex);
	};

	const services = [
		{
			title: 'Desarrollo de aplicaciones web personalizadas',
			description: 'Creamos aplicaciones web a medida que se adaptan a tus necesidades y objetivos.',
			bgClass: 'bg-bgBlack text-secondary',
		},
		{
			title: 'Diseño y Experiencia de Usuario (UX/UI)',
			description:
				'Diseñamos interfaces atractivas y fáciles de usar, asegurando una mejor experiencia de usuario.',
			bgClass: 'bg-secondary text-terciary border-4 border-bgBlack',
		},
		{
			title: 'Consultoría Tecnológica',
			description:
				'Ofrecemos asesoramiento para ayudarte a encontrar la mejor solución para tu web.',			bgClass: 'bg-bgBlack text-secondary',
		},
		{
			title: 'Mantenimiento y Soporte Continuo',
			description:
				'Proporcionamos servicios de mantenimiento y soporte para asegurar que tu sitio web siempre esté en funcionamiento y actualizado.',
			bgClass: 'bg-secondary text-terciary border-4 border-bgBlack',
		},
	];

	return (
		<section id='about' className='m-5 mt-mSections md:mx-16 lg:mx-28'>
			<div className='flex flex-col items-center '>
				<div className='w-full'>
					<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
						Servicios
					</h2>
				</div>
				<ul className='flex flex-col justify-center gap-4 min-w-60 p-3 my-2 lg:grid lg:grid-cols-2 lg:gap-12'>
					{services.map((service, serviceIndex) => (
						<li
							key={serviceIndex}
							className={`${service.bgClass} rounded-[15px] p-5 lg:p-7 flex flex-col items-center text-center shadow-lg`}
						>
							<h3 className='text-xl font-medium flex justify-between items-center lg:text-2xl'>{service.title}</h3>
							<button className='mt-4 lg:hidden' onClick={() => handleToggle(serviceIndex)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={`h-6 w-6 transform transition-transform ${
										activeServiceIndex === serviceIndex ? 'rotate-180' : ''
									}`}
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
								</svg>
							</button>
							<p
								className={`mt-4 text-m lg:text-xl transition-all duration-500 ease-in-out ${
									activeServiceIndex === serviceIndex ? 'block' : 'hidden'
								} lg:block `}
							>
								{service.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Services;
