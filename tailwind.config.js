const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{html,ts,tsx}',
		'./src/components/**/*.{html,ts,tsx}',
		'./src/sections/**/*.{html,ts,tsx}',
		'./src/styles/**/*.{ts,tsx}'
	],
	mode: 'jit',
	theme: {
		extend: {
			// colors: {
			// 	'primary-black': '#1A232E',
			// 	'secondary-white': '#c7c7c7'
			// },
			fontSize: {
				h1: [ '9.375rem', '11.25rem' ],
				h2: [ '4.5rem', '5.4rem' ],
				h3: [ '2rem', '2.4rem' ],
				sm: [ '0.875rem', '1.225rem' ]
			},
			lineHeight: {
				['7x']: '1.8rem',
				['5x']: '1.4rem'
			},
			fontFamily: {
				inter: [ 'var(--font-inter)', ...fontFamily.sans ],
				roboto: [ 'var(--font-roboto)', ...fontFamily.sans ],
				['clash-display']: [ 'var(--font-clash-display)', ...fontFamily.sans ]
			}
			// transitionTimingFunction: {
			// 	'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)'
			// }
		}
	},
	plugins: []
}
