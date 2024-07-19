import { useState } from 'react';
import projects from '../data/projectsData';

const Carousel = () => {
	const [current, setCurrent] = useState(0);

	const handleNext = () => {
		setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	return (
		<div className='relative w-full max-w-4xl mx-auto'>
			<div className='overflow-hidden'>
				<div className='flex transition-transform duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
					{projects.map((project, index) => (
						<div key={index} className='min-w-full p-4'>
							<div className='bg-black rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs sm:max-w-md'>
								<img src={project.image} alt={project.title} className='w-full h-64 object-cover rounded-t-lg' />
								<div className='p-4 bg-black text-white font-sans rounded-b-lg'>
									<a href={project.url} target='_blank' rel='noopener noreferrer'>
										<h2 className='text-xl font-bold hover:underline cursor-pointer'>{project.title}</h2>
									</a>
									<p className='mt-2'>{project.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<button
				className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2'
				onClick={handlePrev}
			>
				&#9664;
			</button>
			<button
				className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2'
				onClick={handleNext}
			>
				&#9654;
			</button>
		</div>
	);
};

export default Carousel;
