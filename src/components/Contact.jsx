import { Link } from 'react-router-dom';

function Contact() {
	return (
		<section
			id='contact'
			className='bg-white dark:bg-grey-600 mt-mSections m-5 rounded-lg md:grid md:grid-cols-2 md:gap-4 md:mx-16 lg:mx-28'
		>
			<div className='md:grid md:grid-cols-2 md:gap-14 md:grid-cols-subgrid md:col-span-2'>
				<div className='mx-auto max-w-screen-md'>
					<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl dark:text-black'>
						Contacto
					</h2>
					<p className='mb-8 py-4 px-2 lg:mb-16 text-justify text-terciary text-gray-900 dark:text-gray-900 lg:text-xl'>
						En AstracodeLAB, te ayudamos a convertir tus ideas en realidad. Si necesitas más información sobre nuestros
						servicios o deseas que analicemos tu próximo proyecto, no dudes en ponerte en contacto con nosotr@s a través
						del formulario. Te responderemos lo antes posible. ¡Estamos deseando trabajar contigo!
					</p>
					<p className='text-justify text-terciary text-gray-900 dark:text-gray-900 lg:text-xl'>
						Si ya sabes exactamente qué tipo de página necesitas, puedes acceder a este formulario donde te haremos unas
						preguntas para conocerte mejor tu proyecto.
					</p>
					<div className='flex justify-center'>
            <a href='https://forms.gle/1GAhCyVYpXPwXNKD9' target='_blank' referrerPolicy='no-referrer'>
              <button
              type='submit'
              className='w-60 mt-10 py-15 px-5 text-xl font-semibold text-center text-black rounded-lg border-2 border-accent  hover:bg-black hover:text-white'
            >
              Acceder al formulario
            </button></a>
          </div>
				</div>
				<div>
					<form id='form' netlify='true' className='space-y-5 pb-7 md:mt-20'>
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
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-accent-500 focus:border-accent-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500 dark:shadow-sm-light'
							/>
						</div>
						<div>
							<input
								type='email'
								id='email'
								name='email'
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-accent-500 focus:border-accent-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500 dark:shadow-sm-light'
								placeholder=' nombre@mail.com'
								required
							/>
						</div>
						<div className='sm:col-span-2'>
							<textarea
								id='message'
								name='message'
								rows='6'
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-accent-500 focus:border-accent-500 dark:bg-gray-50 dark:border-gray-300  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500'
								placeholder='Deja tu mensaje...'
							></textarea>
						</div>
						<div className='flex items-center'>
							<input
								id='link-checkbox'
								required
								type='checkbox'
								value=''
								className='w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-accent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							/>
							<label htmlFor='link-checkbox' className='ms-2 text-xs'>
								Acepto que se traten mis datos para gestionar la consulta.
							</label>
						</div>
						<button
							type='submit'
							className=' min-w-full py-3 px-7 text-xl font-semibold text-center text-black rounded-lg bg-accent sm:w-fit hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-accent dark:bg-accent dark:hover:bg-black dark:hover:text-white dark:focus:ring-accent '
						>
							CONTACTAR
						</button>
						<ul className='text-xs/4 tracking-tight leading-tight mt-5'>
							<li>
								<b>Responsable del fichero:</b> Aida Blaya <br></br>
							</li>
							<li>
								<b>Legitimación:</b> Consentimiento del usuario. <br></br>
							</li>
							<li>
								<b>Destinatarios:</b> Proveedor mensajería online.<br></br>
							</li>
							<li>
								<b>Finalidad:</b> Responder a su consulta.<br></br>
							</li>
							<li>
								<b>Derechos:</b> Acceder, rectificar y suprimir los datos, así como otros derechos, que puede consultar
								de forma detallada en nuestra{' '}
								<Link to='/privacy' className='hover:text-blue-500'>
									Política de Privacidad.
								</Link>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</section>
	);
}
export default Contact;
