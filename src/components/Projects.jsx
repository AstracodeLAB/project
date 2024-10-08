import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {
	const { t } = useTranslation();

	return (
		<section id='projects' className='m-5 mt-20 md:mx-16 lg:mx-28'>
			<div className='relative z-0 md:w-3/4'>
				<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
					{t('projectsSection.title')}
				</h2>
				<p className='mb-8 py-4 px-2 lg:mb-1 text-justify text-gray-900 dark:text-gray-900 lg:text-xl'>
					{t('projectsSection.description')}
				</p>
			</div>
			<div className='py-4 px-2'>
				<div className='block md:hidden'>
					<Carousel />
				</div>
				<div className='hidden md:block'>
					<ProjectsGrid />
				</div>
			</div>
		</section>
	);
};

export default Projects;
