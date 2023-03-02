import { FC, Fragment } from 'react'

import { Header } from '@sections/Header'
import { Hero } from '@sections/Hero'
import { AboutUs } from '@sections/AboutUs'
import { LinearGradients } from '@components/common/LinearGradients'

const Main: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Hero />
				<AboutUs />
			</main>
			<LinearGradients />
		</Fragment>
	)
}

export default Main
