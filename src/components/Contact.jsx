function Contact () {
  return (
  <section class="bg-white dark:bg-grey-600 m-5 rounded-lg md:grid md:grid-cols-2 md:gap-4 md:mx-16 lg:mx-28">
    <div class="md:grid md:grid-cols-2 md:gap-4 md:grid-cols-subgrid md:col-span-2">
        <div class="  mx-auto max-w-screen-md ">
            <h2 class="mt-5 mb-5 pt-4 text-4xl font-semibold text-center text-black-900 dark:text-black">Contacto</h2>
            <p class="mb-8 py-4 px-7 lg:mb-16  text-center text-gray-900 dark:text-gray-900 lg:text-xl">En AstracodeLAB, te ayudamos a convertir tus ideas en realidad. Si necesitas más información sobre nuestros servicios o deseas que analicemos tu próximo proyecto, no dudes en ponerte en contacto con nosotr@s a través del formulario. Te responderemos lo antes posible. ¡Estamos deseando trabajar contigo!</p>
        
    </div>
    <div>       
            <form action="falta submit" class="space-y-8 px-7 pb-7">
                <input type="hidden" name="_feedback.success.title" value="Gracias! En seguida nos pondremos en contacto contigo" />
                <div>
                    <input type="text" id="name" name="name" placeholder="Nombre" required="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
                </div>
                <div>
                    <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder=" nombre@mail.com" required/>
                </div>
                <div class="sm:col-span-2">
                    <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje..."></textarea>
                </div>
                <button type="submit" class=" min-w-full py-3 px-7 text-xl font-semibold text-center text-black rounded-lg bg-primary sm:w-fit hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-black dark:hover:text-white dark:focus:ring-primary ">CONTACTAR</button>
            </form>
    </div>
    </div>
  </section>

  )
}
export default Contact