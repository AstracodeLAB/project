import { Link } from "react-router-dom"

function Footer () {

  return(
  <> 
    <footer >
      <nav className="text-white text-center flex flex-col items-center leading-loose lg:mt-24 lg:flex-row lg:justify-around lg:items-end" >
      <ul className="order-2 lg:text-left">
        <li className="hover:text-primary"><Link to='/legal'>Aviso legal</Link></li>
        <li className="hover:text-primary"><Link to='/privacy'>Politica de privacidad</Link></li>
      </ul>
      <ul className="order-3 pt-5 lg:order-2">
        <span>© 2024 | AstrocodeLAB</span>
      </ul>
      <ul className="order-1 lg:order-3 lg:text-right">
        <li className="hover:text-primary"><a href="#Contact">Sobre AstrocodeLAB</a></li>
        <li className="hover:text-primary"><a href="mailto:astracodelab@gmail.com">Correo</a></li>
        <li>Linkedin</li>
      </ul>
      </nav>
    </footer>
     </>
  )
}
export default Footer