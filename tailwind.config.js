/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#1e293b',
				secondary: 'rgba(255,255,255,.7)',
				terciary: '#111827',
				accent: '#BFFF00',
				bgBlueDark: '#1B1D34',
				bgBlack: '#161618',
				white:'#fff'
			},
			margin: {
				mSections: '5rem',
				15: '15px',
				30: '30px',
				100: '100px',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},

			boxShadow: {
				shadowWhite: '0 10px 10px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(255, 255, 255, 0.24)',
				shadowBlack: '0 10px 10px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)',
			},
			fontSize: {
				h1: [
					'2.6rem',
					{
						lineHeight: '3rem',
						letterSpacing: '0.01em',
						fontWeight: '300',
					},
				],
				h1lg: [
					'5rem',
					{
						lineHeight: '5rem',
						letterSpacing: '0.01em',
						fontWeight: '300',
					},
				],
			},
		},
	},
	plugins: [],
};
