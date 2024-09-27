import { useTranslation } from 'react-i18next';

const technologies = [
	{ name: 'HTML', logo: 'path_to_logo/html_logo.png' },
	{ name: 'CSS', logo: 'path_to_logo/css_logo.png' },
	{ name: 'JavaScript', logo: 'path_to_logo/js_logo.png' },
	{ name: 'React', logo: 'path_to_logo/react_logo.png' },
	{ name: 'Tailwind CSS', logo: 'path_to_logo/tailwind_logo.png' },
	{ name: 'Astro', logo: 'path_to_logo/astro_logo.png' },
	{ name: 'TypeScript', logo: 'path_to_logo/ts_logo.png' },
	// Añade más tecnologías aquí si es necesario
];

const Technologies = () => {
	const { t } = useTranslation();

	return (
		<section id='technologies' className='m-5 mt-20 md:mx-16 lg:mx-28'>
			<div className='relative z-0 '>
				<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
					{t('technologiesSection.title')}
				</h2>
				<p className='mb-8 py-4 px-2 lg:mb-1 text-justify text-gray-900 dark:text-gray-900 lg:text-xl'>
					{t('technologiesSection.description')}
				</p>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
					{technologies.map((tech, index) => (
						<div key={index} className='flex flex-col items-center space-y-4'>
							<img src={tech.logo} alt={`${tech.name} logo`} className='w-20 h-20 object-contain' />
							<p className='text-lg font-medium'>{tech.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
