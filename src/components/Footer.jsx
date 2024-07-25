import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-black py-10 lg: py-5">
        <nav className="text-white text-center flex flex-col items-center leading-loose lg:flex-row lg:justify-around lg:items-end">
          <ul className="order-2 lg:text-left">
            <li className="hover:text-accent">
              <Link to="#legal">Aviso legal</Link>
            </li>
            <li className="hover:text-accent">
              <Link to="#privacy">Politica de privacidad</Link>
            </li>
          </ul>
          <ul className="order-3 pt-5 lg:order-2">
            <span>© 2024 | AstracodeLAB</span>
          </ul>
          <ul className="order-1 lg:order-3 lg:text-right">
            <li className="hover:text-accent">
              <a href="#Contact">Sobre AstracodeLAB</a>
            </li>
            <li className="hover:text-accent">
              <a href="mailto:astracodelab@gmail.com">Correo</a>
            </li>
            <li><a href="https://www.linkedin.com/company/astracodelab/">Linkedin</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
export default Footer;
