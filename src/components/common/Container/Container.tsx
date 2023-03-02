import { FC } from 'react'

import { IFCWithChildren, Nullable } from '@interfaces/global.types'

interface IProps extends IFCWithChildren {
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
			{ title && <h2 className='text-center'>{ title }</h2> }
			{ children }
		</div>
	)
}
