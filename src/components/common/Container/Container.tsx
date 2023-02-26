import { FC } from 'react'

import { IComponentWithChildren, Nullable } from '@interfaces/global.types'

interface IProps extends IComponentWithChildren {
	title?: Nullable<string>
	paddingY?: string
}

export const Container: FC<IProps> = ({
	children,
	title = null,
	paddingY = 'py-19'
}) => {
	return (
		<div className={ `container ${ paddingY }` }>
			{ title && <h2>{ title }</h2> }
			{ children }
		</div>
	)
}
