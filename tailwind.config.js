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
			colors: {
				'primary-black': '#1A232E',
				'secondary-white': '#c7c7c7'
			},
			fontFamily: {
				inter: [ 'var(--font-inter)', ...fontFamily.sans ],
				roboto: [ 'var(--font-roboto)', ...fontFamily.sans ],
				['clash-display']: [ 'var(--font-clash-display)', ...fontFamily.sans ]
			},
			transitionTimingFunction: {
				'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)'
			}
		}
	},
	plugins: []
}
