import projects from '../data/projectsData';

const ProjectsGrid = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
			{projects.map((project, index) => (
				<div key={index} className='bg-black rounded-lg overflow-hidden shadow-lg'>
					<div className='relative'>
						<img
							src={project.image}
							alt={project.title}
							className='w-full h-64 object-cover rounded-t-lg'
						/>
						<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent rounded-t-lg'></div>
					</div>
					<div className='p-4 bg-black text-white font-sans rounded-b-lg'>
						<a href={project.url} target='_blank' rel='noopener noreferrer'>
							<h2 className='text-xl font-bold hover:underline cursor-pointer'>{project.title}</h2>
						</a>
						<p className='mt-2'>{project.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectsGrid;
