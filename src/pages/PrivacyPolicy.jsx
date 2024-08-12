import Footer from '../components/Footer';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className='mt-0 relative  bg-gradient-to-t from-[#0B1F44] m-0'>
				<Header />
			</div>

			<section className='m-10'>
				<h1 className='text-xl font-medium pb-8'>{t('privacyPolicy.title')}</h1>
				<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.intro') }}></p>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.1.title')}</h2>
					<p>{t('privacyPolicy.sections.1.details')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.2.title')}</h2>
					<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.sections.2.details')}}></p>
					<ul>
						<li>{t('privacyPolicy.sections.2.dataTypes.contact')}</li>
					</ul>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.3.title')}</h2>
					<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.sections.3.details')}} ></p>
					<p>{t('privacyPolicy.sections.3.note')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.4.title')}</h2>
					<ul>
						<li>{t('privacyPolicy.sections.4.uses.1')}</li>
						<li>{t('privacyPolicy.sections.4.uses.2')}</li>
						<li>{t('privacyPolicy.sections.4.uses.3')}</li>
						<li>{t('privacyPolicy.sections.4.uses.4')}</li>
					</ul>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.5.title')}</h2>
					<p>{t('privacyPolicy.sections.5.details')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.6.title')}</h2>
					<p>{t('privacyPolicy.sections.6.details')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.7.title')}</h2>
					<p>{t('privacyPolicy.sections.7.details')}</p>
					<ul>
						<li>{t('privacyPolicy.sections.7.rights.1')}</li>
						<li>{t('privacyPolicy.sections.7.rights.2')}</li>
						<li>{t('privacyPolicy.sections.7.rights.3')}</li>
						<li>{t('privacyPolicy.sections.7.rights.4')}</li>
						<li>{t('privacyPolicy.sections.7.rights.5')}</li>
						<li>{t('privacyPolicy.sections.7.rights.6')}</li>
					</ul>
					<p>{t('privacyPolicy.sections.7.note')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.8.title')}</h2>
					<p>{t('privacyPolicy.sections.8.details')}</p>
					<ul>
						<li>{t('privacyPolicy.sections.8.thirdParties.1')}</li>
						<li>{t('privacyPolicy.sections.8.thirdParties.2')}</li>
					</ul>
					<p>{t('privacyPolicy.sections.8.note')}</p>
				</section>
				<section className='mt-8'>
					<h2>{t('privacyPolicy.sections.9.title')}</h2>
					<p>{t('privacyPolicy.sections.9.details')}</p>
				</section>
        </section>
        <Footer />
		</>
	);
};

export default PrivacyPolicy;
