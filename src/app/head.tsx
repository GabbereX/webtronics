import { FC, Fragment } from 'react'

const head: FC = () => {
	return (
		<Fragment>
			<title>Webtronics - Front-End Developer Courses</title>
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<link
				rel='icon'
				href='/favicon.ico'
			/>
		</Fragment>
	)
}

export default head
