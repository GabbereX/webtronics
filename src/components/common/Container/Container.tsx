import { FC } from 'react'

import { IComponentWithChildren } from '@interfaces/global.types'

export const Container: FC<IComponentWithChildren> = ({ children }) => {
	return (
		<div className='container'>
			{ children }
		</div>
	)
}
