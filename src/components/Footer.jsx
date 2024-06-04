function Footer () {

  return(
  <> 
    <footer className="text-white text-center flex flex-col items-center leading-loose lg:mt-24 lg:flex-row lg:justify-around lg:items-end" >
      <div className="order-1 lg:text-left">
        <p>Aviso legal</p>
        <p>Politica de privacidad</p>
        <p>Politica de cookies</p>
      </div>
      <div className="order-3 pt-5 lg:order-2">
        <span>© 2024 | AstrocodeLAB</span>
        </div>
      <div className="order-2 lg:order-3 lg:text-right">
        <p>Sobre AstrocodeLAB</p>
        <p>Correo</p>
        <p>Linkedin</p>
      </div>
    </footer>
     </>
  )
}
export default Footer