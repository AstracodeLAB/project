import { Link } from "react-router-dom";

function Contact() {

  return (
    <section className='bg-white dark:bg-grey-600 m-5 rounded-lg md:grid md:grid-cols-2 md:gap-4 md:mx-16 lg:mx-28'>
      <div className='md:grid md:grid-cols-2 md:gap-4 md:grid-cols-subgrid md:col-span-2'>
        <div className='  mx-auto max-w-screen-md '>
          <h2 className='mt-5 mb-5 pt-4 text-4xl font-semibold text-center text-black-900 dark:text-black'>
            Contacto
          </h2>
          <p className='mb-8 py-4 px-7 lg:mb-16  text-center text-gray-900 dark:text-gray-900 lg:text-xl'>
            En AstracodeLAB, te ayudamos a convertir tus ideas en realidad. Si
            necesitas más información sobre nuestros servicios o deseas que
            analicemos tu próximo proyecto, no dudes en ponerte en contacto con
            nosotr@s a través del formulario. Te responderemos lo antes posible.
            ¡Estamos deseando trabajar contigo!
          </p>
        </div>
        <div>
          <form id='form' netlify className='space-y-5 px-7 pb-7'>
            <input
              type='hidden'
              name='_feedback.success.title'
              value='Gracias! En seguida nos pondremos en contacto contigo'
            />
            <div>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Nombre'
                required=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              />
            </div>
            <div>
              <input
                type='email'
                id='email'
                name='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder=' nombre@mail.com'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <textarea
                id='message'
                name='message'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Deja tu mensaje...'
              ></textarea>
            </div>
            <div className="flex items-center">
                <input id="link-checkbox" required type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="link-checkbox" className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">Acepto que se traten mis datos para gestionar la consulta.</label>
                
            </div>
            <button
              type='submit'
              className=' min-w-full py-3 px-7 text-xl font-semibold text-center text-black rounded-lg bg-primary sm:w-fit hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-black dark:hover:text-white dark:focus:ring-primary '

            >
              CONTACTAR
            </button>
            <span className="text-xs/4 font-thin tracking-tight leading-tight">
            <b>Responsable del fichero:</b> XXXXXX <br></br>
            <b>Legitimación:</b> Consentimiento del usuario. <br></br>
            <b>Destinatarios:</b> Proveedor mensajería online.<br></br>
            <b>Finalidad:</b> Responder a su consulta.<br></br>
            <b>Derechos:</b> Acceder, rectificar y suprimir los datos, así como otros derechos, que puede consultar de forma detallada en nuestra <a href="/privacy-policy">Política de Privacidad.</a></span>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
