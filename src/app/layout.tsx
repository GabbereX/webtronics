import { FC, ReactNode } from 'react'

import { Fira_Code } from '@next/font/google'

import '@/styles/globals.css'

const font = Fira_Code({
	weight: [ '400', '600' ],
	subsets: [ 'latin', 'cyrillic' ]
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
			className={ font.className }
		>
		{ children }
		</body>
		</html>
	)
}

export default RootLayout
