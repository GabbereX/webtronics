import { ReactNode } from 'react'

export interface IComponentWithChildren {
	children: ReactNode
}

export type Nullable<T> = null | T
