import { useTranslation } from 'react-i18next';

function Contact() {
	const { t } = useTranslation();

	return (
		<section
			id='contact'
			className='bg-white dark:bg-grey-600 mt-mSections m-5 rounded-lg md:grid md:grid-cols-2 md:gap-4 md:mx-16 lg:mx-28'
		>
			<div className='md:grid md:grid-cols-2 md:gap-14 md:grid-cols-subgrid md:col-span-2'>
				<div className='mx-auto max-w-screen-md'>
					<h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl dark:text-black'>
						{t('contact.title')}
					</h2>
					<p className='mb-8 py-4 px-2 lg:mb-16 text-justify text-terciary text-gray-900 dark:text-gray-900 lg:text-xl'>
						{t('contact.description1')}
					</p>
					<p className='text-justify text-terciary text-gray-900 dark:text-gray-900 lg:text-xl'>
						{t('contact.description2')}
					</p>
					<div className='flex justify-center'>
						<a href='https://forms.gle/1GAhCyVYpXPwXNKD9' target='_blank' rel='noopener noreferrer'>
							<button
								type='submit'
								className='w-60 mt-10 py-15 px-5 text-xl font-semibold text-center text-black rounded-lg border-2 border-accent hover:bg-black hover:text-white'
							>
								{t('contact.formButton')}
							</button>
						</a>
					</div>
				</div>
				<div>
					<form
						id='form'
						method='POST'
						name='contact'
						data-netlify='true'
						data-netlify-honeypot='bot-field'
						className='space-y-5 pb-7 md:mt-20'
					>
						<input type='hidden' name='form-name' value='contact' />
						<div hidden>
							<label>
								{t('contact.hiddenFieldLabel')}: <input name='bot-field' />
							</label>
						</div>
						<div>
							<input
								type='text'
								id='name'
								name='name'
								placeholder={t('contact.formPlaceholderName')}
								required
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-accent-500 focus:border-accent-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500 dark:shadow-sm-light'
							/>
						</div>
						<div>
							<input
								type='email'
								id='email'
								name='email'
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-accent-500 focus:border-accent-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500 dark:shadow-sm-light'
								placeholder={t('contact.formPlaceholderEmail')}
								required
							/>
						</div>
						<div className='sm:col-span-2'>
							<textarea
								id='message'
								name='message'
								rows='6'
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-accent-500 focus:border-accent-500 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-accent-500 dark:focus:border-accent-500'
								placeholder={t('contact.formPlaceholderMessage')}
							></textarea>
						</div>
						<div className='flex items-center'>
							<input
								id='link-checkbox'
								required
								type='checkbox'
								value=''
								className='w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-accent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							/>
							<label htmlFor='link-checkbox' className='ms-2 text-xs'>
								{t('contact.formCheckbox')}
							</label>
						</div>
						<button
							type='submit'
							className='min-w-full py-3 px-7 text-xl font-semibold text-center text-black rounded-lg bg-accent sm:w-fit hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-accent dark:bg-accent dark:hover:bg-black dark:hover:text-white dark:focus:ring-accent '
						>
							{t('contact.formSubmitButton')}
						</button>
						<ul className='text-xs/4 tracking-tight leading-tight mt-5'>
							<li>
								<b>{t('contact.responsible')}</b> <br />
							</li>
							<li>
								<b>{t('contact.legitimacy')}</b> <br />
							</li>
							<li>
								<b>{t('contact.recipients')}</b> <br />
							</li>
							<li>
								<b>{t('contact.purpose')}</b> <br />
							</li>
							<li>
								{/* <b>{t('contact.rights')}</b> <br /> */}
								<span className='font-bold' dangerouslySetInnerHTML={{ __html: t('contact.rights') }} />
							</li>
						</ul>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
