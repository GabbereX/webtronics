import { FC, ReactNode } from 'react'

import { Inter } from '@next/font/google'

import '@styles/globals.css'

const font = Inter({
	weight: [ '400', '500', '600' ],
	subsets: [ 'latin', 'cyrillic' ],
	variable: '--font-inter'
})

interface IProps {
	children: ReactNode
}

const RootLayout: FC<IProps> = ({
	children
}) => {
	return (
		<html lang='en'>
		{/*<head />*/ }
		<body
			className={ `${ font.className } font-sans` }
		>
		{ children }
		</body>
		</html>
	)
}

export default RootLayout
