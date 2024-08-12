import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Header from '../components/Header';

function LegalNotice() {
	const { t } = useTranslation();

	return (
		<>
			<div className='mt-0 relative bg-gradient-to-t from-[#0B1F44] m-0'>
				<Header />
			</div>
			<section className='m-10'>
				<h1 className='text-xl font-medium pb-8'>{t('legalNotice.title')}</h1>
				<ol>
					<li>1. {t('legalNotice.sections.section1.title')}</li>
					<p>{t('legalNotice.sections.section1.content')}</p>
					<ol>
						<li>{t('legalNotice.sections.section1.items.0')}</li>
						<li>{t('legalNotice.sections.section1.items.1')}</li>
						<li>{t('legalNotice.sections.section1.items.2')}</li>
						<li>{t('legalNotice.sections.section1.items.3')}</li>
					</ol>
					<br />
					<li>2. {t('legalNotice.sections.section2.title')}</li>
					<p>{t('legalNotice.sections.section2.content1')}</p>
					<p>{t('legalNotice.sections.section2.content2')}</p>
					<br />
					<li>3. {t('legalNotice.sections.section3.title')}</li>
					<p>{t('legalNotice.sections.section3.content1')}</p>
					<ol>
						<li>{t('legalNotice.sections.section3.items.0')}</li>
						<li>{t('legalNotice.sections.section3.items.1')}</li>
					</ol>
					<p>{t('legalNotice.sections.section3.content2')}</p>
					<br />
					<li>4. {t('legalNotice.sections.section4.title')}</li>
					<p>{t('legalNotice.sections.section4.content1')}</p>
					<ol>
						<li>{t('legalNotice.sections.section4.items.0')}</li>
						<li>{t('legalNotice.sections.section4.items.1')}</li>
						<li>{t('legalNotice.sections.section4.items.2')}</li>
						<li>{t('legalNotice.sections.section4.items.3')}</li>
					</ol>
					<p>{t('legalNotice.sections.section4.content2')}</p>
					<br />
					<li>5. {t('legalNotice.sections.section5.title')}</li>
					<p>{t('legalNotice.sections.section5.content')}</p>
					<br />
					<li>6. {t('legalNotice.sections.section6.title')}</li>
					<p>{t('legalNotice.sections.section6.content')}</p>
					<br />
					<li>7. {t('legalNotice.sections.section7.title')}</li>
					<p>{t('legalNotice.sections.section7.content1')}</p>
					<ol>
						<li>{t('legalNotice.sections.section7.items.0')}</li>
						<li>{t('legalNotice.sections.section7.items.1')}</li>
						<li>{t('legalNotice.sections.section7.items.2')}</li>
						<li>{t('legalNotice.sections.section7.items.3')}</li>
					</ol>
					<p>{t('legalNotice.sections.section7.content2')}</p>
					<br />
					<li>8. {t('legalNotice.sections.section8.title')}</li>
					<p>{t('legalNotice.sections.section8.content1')}</p>
					<ol>
						<li>{t('legalNotice.sections.section8.items.0')}</li>
						<li>{t('legalNotice.sections.section8.items.1')}</li>
					</ol>
					<p>{t('legalNotice.sections.section8.content2')}</p>
					<br />
					<li>9. {t('legalNotice.sections.section9.title')}</li>
					<p>{t('legalNotice.sections.section9.content1')}</p>
					<p>{t('legalNotice.sections.section9.content2')}</p>
				</ol>
			</section>
			<Footer />
		</>
	);
}

export default LegalNotice;
