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
		transitionDuration: {
			DEFAULT: '300ms'
		},
		extend: {
			container: {
				center: true,
				padding: '3.125rem',
				screens: {
					'2xl': '1324px'
				}
			},
			spacing: {
				'19': '4.6875rem'
			},
			colors: {
				'blue-10': '#A2CBFB',
				'blue-20': '#3B48D0',
				'blue-30': '#0A1482',
				'blue-80': '#0C102D',
				'red': '#FD4646',
				'gray-5': 'rgba(255, 255, 255, 0.05)',
				'gray-20': '#636363'
			},
			backgroundImage: {
				'gradient-1': 'linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%)',
				'gradient-2': 'linear-gradient(180deg, #1FF2FF 0%, #27F9E5 52.66%, #2FFFCD 100%)',
				'gradient-3': 'linear-gradient(90deg, rgba(21, 191, 253, 0) 8.03%, rgba(21, 191, 253, 0.7) 69.15%, rgba(156, 55, 253, 0.7) 97.95%)'
			},
			fontSize: {
				// h1: [ '9.375rem', '11.25rem' ],
				h1: [ '7.8125vi', '9.375vi' ],
				h2: [ '4.5rem', '5.4rem' ],
				h3: [ '2rem', '2.4rem' ],
				sm: [ '0.875rem', '1.225rem' ]
			},
			lineHeight: {
				'7x': '1.8rem',
				'5x': '1.4rem'
			},
			fontFamily: {
				inter: [ 'var(--font-inter)', ...fontFamily.sans ],
				roboto: [ 'var(--font-roboto)', ...fontFamily.sans ],
				'clash-display': [ 'var(--font-clash-display)', ...fontFamily.sans ]
			},
			dropShadow: {
				white: '0 0 3px rgba(255, 255, 255, 1)'
			}
		}
	},
	plugins: []
}
