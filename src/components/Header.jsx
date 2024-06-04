import Logo from '../assets/prueba1Logo.png';
import { useState } from "react";

function Header () {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  mt-4 ml-7 mr-7">
      <a href="/">
        <img className="w-20" src={Logo} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
          <span className="block h-1.5 w-9 animate-pulse bg-accent rounded-full"></span>
          <span className="block h-1.5 w-9 animate-pulse bg-accent rounded-full"></span>
          <span className="block h-1.5 w-9 animate-pulse bg-accent rounded-full"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-xl font-semibold">
              <li className="border-b border-accent my-8 uppercase">
                <a href="/about">Servicios</a>
              </li>
              <li className="border-b border-accent my-8 uppercase">
                <a href="/portfolio">Sobre AstracodeLAB</a>
              </li>
              <li className="border-b border-accent my-8 uppercase">
                <a href="/contact">Proyectos</a>
              </li>
              <li className="border-b border-accent my-8 uppercase">
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-accent text-xl font-semibold">
          <li > 
            <a  href="/about">Servicios</a>
          </li>
          <li>
            <a href="/portfolio">Sobre AstracodeLAB</a>
          </li>
          <li>
            <a href="/contact">Proyectos</a>
          </li>
          <li className='text-accent bg-primary border border-secondary pr-2 pl-2'>
            <a href="/contact">CONTACTAR</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

  export default Header;