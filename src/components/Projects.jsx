import Carousel from './Carousel';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {
	return (
		<section id='projects' className='m-5 mt-20 md:mx-16 lg:mx-28 '>
			<div className='relative z-0 md:w-3/4 '>
				<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
					Proyectos
				</h2>
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
