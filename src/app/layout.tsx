import '@styles/globals.scss'

import { FC, ReactNode } from 'react'

import { Inter, Roboto } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({
	weight: [ '400', '500', '600' ],
	subsets: [ 'latin', 'cyrillic' ],
	variable: '--font-inter'
})

const roboto = Roboto({
	weight: '700',
	subsets: [ 'latin', 'cyrillic' ],
	variable: '--font-roboto'
})

const clashDisplay = localFont({
	src: [
		{
			path: '../../public/fonts/clash-display-regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/clash-display-regular.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/clash-display-medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/clash-display-medium.woff',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/clash-display-semibold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: '../../public/fonts/clash-display-semibold.woff',
			weight: '600',
			style: 'normal'
		}
	],
	variable: '--font-clash-display'
})

const bodyClasses = `
	${ inter.variable } 
	${ clashDisplay.variable } 
	${ roboto.variable } 
	font-inter leading-5x text-white
	bg-blue-80
`

interface IProps {
	children: ReactNode
}

const RootLayout: FC<IProps> = ({
	children
}) => {
	return (
		<html lang='en'>
		<body className={ bodyClasses }>
		{ children }
		</body>
		</html>
	)
}

export default RootLayout
