import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<footer className='bg-black py-10 lg:py-5'>
				<nav className='text-white text-center flex flex-col items-center leading-loose lg:flex-row lg:justify-around lg:items-end'>
					<ul className='order-2 lg:text-left'>
						<li className='hover:text-accent'>
							<Link to='/legal'>{t('footer.legal')}</Link>
						</li>
						<li className='hover:text-accent'>
							<Link to='/privacy'>{t('footer.privacy')}</Link>
						</li>
					</ul>
					<ul className='order-3 pt-5 lg:order-2'>
						<span>{t('footer.copyright')}</span>
					</ul>
					<ul className='order-1 lg:order-3 lg:text-right'>
						<li className='hover:text-accent'>
							<a href='/#about-us'>{t('footer.about')}</a>
						</li>
						<li className='hover:text-accent'>
							<a href='mailto:astracodelab@gmail.com'>{t('footer.email')}</a>
						</li>
						<li className='hover:text-accent'>
							<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/astracodelab/'>
								{t('footer.linkedin')}
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
}

export default Footer;
