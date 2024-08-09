import imgHero from '../assets/BgHero.png';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <article className='flex flex-col justify-center items-center px-2 mb-5 m-5 md:mx-16 lg:mx-28 lg:grid lg:grid-cols-2 lg:gap-28 lg:justify-items-center lg:items-center'>
          <div className='order-1 lg:order-2 min-w-[150px] max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] mb-5'>
            <img
              className='h-auto rounded-full shadow-Hero-primary shadow-shadowWhite'
              src={imgHero}
              alt='Hero Image'
            />
          </div>
          <div className='order-2 mb-5 lg:order-1 font-sans'>
            <h1 className='my-7 font-medium text-h1 text-hero text-center lg:text-left lg:text-h1lg min-w-fit'>
              {t('hero.title')}
            </h1>
            <p className='mt-4 font-sans text-hero text-m lg:text-justify text-lg lg:text-l mb-5 lg:text-left'>
              <span dangerouslySetInnerHTML={{ __html: t('hero.descriptionPart1') }} />
              <span dangerouslySetInnerHTML={{ __html: t('hero.descriptionPart2') }} />
              <span dangerouslySetInnerHTML={{ __html: t('hero.descriptionPart3') }} />
            </p>
            <div className='flex justify-center lg:mt-3 mb-4'>
              <button className='text-accent border border-secondary font-bold flex mt-4 p-3 pr-5 pl-5 text-xl rounded-full hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out md:p-18'>
                {t('hero.contactButton')}
              </button>
            </div>
          </div>
        </article>
      </section>
      <div
        className='h-0 
          border-7 border-solid border-white
          border-l-[97vw] border-l-transparent
          border-b-[50px] border-b-white
        '
      ></div>
    </>
  );
}

export default Hero;
