import { FC } from 'react'

import { Container } from '@components/Container'
import { Navigation } from '@components/Navigation'
import { Icon } from '@components/Icon'

import { ESVG } from '@constants/svg.const'

export const Header: FC = () => {
	return (
		<header>
			<Container classes='py-10'>
				<div className='flex justify-between'>
					<Icon
						className='
							cursor-pointer
							[& path]: fill-current text-white transition-[filter]
							hover:drop-shadow-white
						'
						name={ ESVG.LOGO }
						size={ [ 169, 33 ] }
					/>
					<Navigation />
				</div>
			</Container>
		</header>
	)
}
