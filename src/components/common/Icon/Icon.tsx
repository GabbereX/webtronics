import { FC } from 'react'

import { EIcons } from '@constants/icons.const'

interface IProps {
	name: EIcons
	className?: string
	section?: string
	size: [ number | string, number | string ]
}

export const Icon: FC<IProps> = ({
	name,
	className,
	section = 'main',
	size = [ 'auto', 'auto' ]
}) => {
	const path = `/sprites/${ section }.svg#${ name }`

	return (
		<svg
			className={ className }
			width={ size[0] }
			height={ size[1] }
		>
			<use xlinkHref={ path } />
		</svg>
	)
}
