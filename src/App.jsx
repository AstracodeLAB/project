
import Hero from './components/Hero';
import Header from './components/Header';
import imgBackground from './assets/imgBackground.png';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
    <div className="min-h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url(${imgBackground})` }} >
      <Header />
      <Hero />
    </div>
    <AboutUs />
    </>
  );
}


export default App;
