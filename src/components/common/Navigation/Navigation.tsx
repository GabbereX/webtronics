import { FC } from 'react'

import { navigationLinks } from '@constants/navigation.consts'

import styles from './Navigation.module.scss'

export const Navigation: FC = () => {
	return (
		<nav className='flex items-center'>
			<ul className='flex'>
				{
					navigationLinks.map(({ value, link }) => (
						<li
							className='
								[&:not(:last-child)]:mr-12
							'
						>
							<a
								href={ `#${ link }` }
								className={ `${ styles.link } relative` }
							>
								{ value }
							</a>
						</li>
					))
				}
			</ul>
		</nav>
	)
}
