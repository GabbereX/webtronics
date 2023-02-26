import { FC } from 'react'

import { Logo } from '@components/svg/Logo'
import { Container } from '@components/common/Container'
import { Navigation } from '@components/common/Navigation'

export const Header: FC = () => {
	return (
		<header>
			<Container paddingY='py-10'>
				<div className='flex justify-between'>
					<Logo />
					<Navigation />
				</div>
			</Container>
		</header>
	)
}
