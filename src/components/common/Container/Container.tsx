import { FC } from 'react'

import { IFCWithChildren, Nullable } from '@interfaces/global.types'

interface IProps extends IFCWithChildren {
	title?: Nullable<string>
	classes?: string
}

export const Container: FC<IProps> = ({
	children,
	title = null,
	classes = 'py-19'
}) => {
	return (
		<div className={ `container ${ classes }` }>
			{ title && <h2 className='text-center'>{ title }</h2> }
			{ children }
		</div>
	)
}
