import { FC } from 'react'

import { LogoSVG } from '@components/svg/LogoSVG'
import { Container } from '@components/common/Container'
import { Navigation } from '@components/common/Navigation'

export const Header: FC = () => {
	return (
		<header>
			<Container paddingY='py-10'>
				<div className='flex justify-between'>
					<LogoSVG />
					<Navigation />
				</div>
			</Container>
		</header>
	)
}
