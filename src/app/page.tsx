import { FC, Fragment } from 'react'

import { Header } from '@sections/Header'
import { Hero } from '@sections/Hero'
import { AboutUs } from '@sections/AboutUs'
import { SVGHelper } from '@components/SVGHelper'
import { Technologies } from '@sections/Technologies'

const Main: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Hero />
				<AboutUs />
				<Technologies />
			</main>
			<SVGHelper />
		</Fragment>
	)
}

export default Main
