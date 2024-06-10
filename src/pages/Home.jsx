import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import imgBackground from '../assets/imgBackground.png';

function Home() {
	return (
		<>
			{/* Sección para el Header y el Hero */}
			<div
				className='bg-cover bg-center'
				style={{
					backgroundImage: `url(${imgBackground})`,
					backgroundSize: 'cover',
				}}
			>
				<Header />
				<Hero />
			</div>

			{/* Resto de secciones */}
			<div
				className='min-h-screen bg-cover bg-center flex flex-col'
				style={{
					backgroundImage: `linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), url(${imgBackground})`,
					backgroundSize: 'cover',
				}}
			>
				<AboutUs />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default Home;
