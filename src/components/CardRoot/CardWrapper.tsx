import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './CardWrapper.styles.scss'
import { ESubstractSVG } from '@constants/svg.const'
import { IFCWithChildren } from '@interfaces/global.types'

interface IProps extends IFCWithChildren {
	substract?: ESubstractSVG
	backgroundRevert?: boolean
	classes?: string
}

export const CardWrapper: FC<IProps> = ({
	children,
	substract = ESubstractSVG.COMMON,
	backgroundRevert = false,
	classes
}) => {
	const styles = cn('CardWrapper')

	return (
		<div className={ styles(null, [ classes ]) }>
			<div className={ styles('Container', { substract, backgroundRevert }) } />
			<div className={ styles('Content', { substract }) }>{ children }</div>
		</div>
	)
}
