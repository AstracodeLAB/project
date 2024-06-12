import Logo from '../assets/prueba1Logo.png';
import { useState } from 'react';

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className='flex items-center justify-between  mt-4 ml-7 mr-7'>
			<a href='/'>
				<img className='w-20' src={Logo} alt='logo' />
			</a>
			<nav>
				<section className='MOBILE-MENU flex lg:hidden cursor-pointer'>
					<div
						className='HAMBURGER-ICON space-y-2 transform transition-transform duration-300 hover:rotate-90'
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className='block h-1.5 w-9 animate-pulse bg-accent rounded-full transition-transform duration-300'></span>
						<span className='block h-1.5 w-9 animate-pulse bg-accent rounded-full transition-transform duration-300'></span>
						<span className='block h-1.5 w-9 animate-pulse bg-accent rounded-full transition-transform duration-300'></span>
					</div>

					<div className={`${isNavOpen ? 'showMenuNav' : 'hideMenuNav'}`}>
						<div
							className='absolute top-0 right-0 px-8 py-8 transition-colors duration-300 hover:text-accent'
							onClick={() => setIsNavOpen(false)}
						>
							<svg
								className='h-8 w-8 text-secondary transition-colors duration-300 hover:text-accent cursor-pointer'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</div>
						<ul className='flex flex-col items-center justify-between min-h-[250px] text-xl font-semibold text-secondary '>
							<li className='border-b border-accent my-8 uppercase hover:border-transparent transition-border duration-300'>
								<a href='/about' className='hover:text-accent transition-colors duration-300'>
									Servicios
								</a>
							</li>
							<li className='border-b border-accent my-8 uppercase hover:border-transparent transition-border duration-300'>
								<a href='/portfolio' className='hover:text-accent transition-colors duration-300'>
									Sobre AstracodeLAB
								</a>
							</li>
							<li className='border-b border-accent my-8 uppercase hover:border-transparent transition-border duration-300'>
								<a href='/projects' className='hover:text-accent transition-colors duration-300'>
									Proyectos
								</a>
							</li>
							<li className='border-b border-accent my-8 uppercase hover:border-transparent transition-border duration-300'>
								<a href='/contact' className='hover:text-accent transition-colors duration-300'>
									Contacto
								</a>
							</li>
						</ul>
					</div>
				</section>

				<ul className='DESKTOP-MENU hidden space-x-8 lg:flex text-accent text-xl font-semibold'>
					<li>
						<a href='/about' className='hover:text-secondary transition-colors duration-300'>
							Servicios
						</a>
					</li>
					<li>
						<a href='/portfolio' className='hover:text-secondary transition-colors duration-300'>
							Sobre AstracodeLAB
						</a>
					</li>
					<li>
						<a href='/projects' className='hover:text-secondary transition-colors duration-300'>
							Proyectos
						</a>
					</li>
					<li className='text-accent bg-primary border border-secondary pr-2 pl-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 ease-in-out'>
						<a href='/contact'>Contactar</a>
					</li>
				</ul>
			</nav>
			<style>{`    

        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #1B1D34;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          cursor: default;
        }

        
      `}</style>
		</div>
	);
}

export default Header;
