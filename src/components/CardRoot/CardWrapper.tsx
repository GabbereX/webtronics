import { FC } from 'react'

import styles from './CardWrapper.module.scss'

export const CardWrapper: FC = () => {
	return (
		<div
			className={ `p-[1px] ${ styles.wrapper }` }
		>
			<div className={ `p-[1px] ${ styles.root }` }>
				CardRood
			</div>
		</div>
	)
}
