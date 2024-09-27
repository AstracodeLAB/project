import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import imgBackground from '../assets/imgBackground.png';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

function Home() {
	return (
		<>
			<div
				className='min-h-[60vh] bg-cover bg-center flex flex-col md:min-h-min'
				style={{ backgroundImage: `url(${imgBackground})` }}
			>
				<Header />
				<Hero />
			</div>

			<Services />
			<AboutUs />
			<Projects />
			<Technologies />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
