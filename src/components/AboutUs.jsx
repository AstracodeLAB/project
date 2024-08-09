import { useTranslation } from 'react-i18next';
import about from '../assets/about.png';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id='about-us' className='m-5 mt-mSections md:mx-16 lg:mx-28'>
        <div className='relative z-0 md:w-3/4'>
          <h2 className='relative z-10 bg-gradient-to-r from-accent via-lime-200 to-transparent font-sans font-medium text-3xl px-2 mb-5 rounded md:inline-block md:text-4xl'>
            {t('about.title')}
          </h2>
        </div>
        <div className='flex flex-col items-center py-4 px-2 lg:flex lg:flex-row lg:justify-center md:my-2 md:gap-6 xl:gap-12'>
          <img
            className='rounded-full w-5/6 my-6 shadow-xl md:w-1/2 lg:w-1/3'
            src={about}
            alt={t('about.altText')}
          />
          <article className='font-sans text-terciary text-m border-4 border-black rounded-2xl p-5 my-2 shadow-xl md:m-0 md:text-xl lg:p-1'>
            <p className='my-3 lg:p-3'>
              {t('about.paragraph1')}
            </p>
            <p className='my-3 lg:p-3'>
              {t('about.paragraph2')}
            </p>
            <p className='my-3 lg:p-3'>
              {t('about.paragraph3')}
            </p>
            <p className='my-3 lg:p-3'>
              {t('about.paragraph4')}
            </p>
            <p className='my-3 lg:p-3' dangerouslySetInnerHTML={{ __html: t('about.paragraph5') }} />
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
