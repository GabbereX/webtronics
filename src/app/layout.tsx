import { FC, ReactNode } from 'react'

import '@/styles/globals.css'

interface IProps {
	children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
	return (
		<html lang='ru'>
		<head>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<link
				rel='icon'
				href='/favicon.ico' />
			<title>Webtronics</title>
		</head>
		<body>{ children }</body>
		</html>
	)
}

export default RootLayout
