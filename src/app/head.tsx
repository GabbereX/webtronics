import { FC, Fragment } from 'react'

const Head: FC = () => {
	return (
		<Fragment>
			<title>Webtronics - Front-End Developer Courses</title>
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<link
				rel='icon'
				type='image/svg+xml'
				href='/favicon.svg'
			/>
		</Fragment>
	)
}

export default Head
