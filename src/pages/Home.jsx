import Contact from "../components/Contact";
import Footer from "../components/Footer"

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