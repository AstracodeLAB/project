import Contact from "../components/Contact";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import imgBackground from "../assets/imgBackground.png";

function Home () {
  return (<>
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${imgBackground})` }}
    >
      <Header />
      <Hero />
    </div>
    <AboutUs />
    <Contact/>
    <Footer/>
  </>
  )
}
export default Home