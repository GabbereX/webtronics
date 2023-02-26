import { FC, Fragment } from 'react'

import { Header } from '@sections/Header'
import { Hero } from '@sections/Hero'

const Main: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Hero />
			</main>
		</Fragment>
	)
}

export default Main
