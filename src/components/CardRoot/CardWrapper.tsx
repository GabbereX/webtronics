import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './CardWrapper.styles.scss'

export const CardWrapper: FC = () => {
	const styles = cn('CardWrapper')

	return (
		<div className={ styles() }>
			<div className={ styles('Container') } />
			<div className={ styles('Content') }>Content</div>
		</div>
	)
}
