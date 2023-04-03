import { cn } from '@bem-react/classname'
import { FC, useEffect, useRef } from 'react'

import './CardWrapper.styles.scss'
import { Nullable } from '@interfaces/global.types'
import { roundRect } from '@utils/canvas.utils'

interface IProps {
	isCanvas?: boolean
}

export const CardWrapper: FC<IProps> = ({ isCanvas }) => {
	const styles = cn('CardWrapper')

	const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null)

	useEffect(() => {
		if (canvasRef.current) {
			const canvas: Nullable<CanvasRenderingContext2D> = canvasRef.current.getContext('2d')

			if (canvas) {
				// const gradient = canvas.createLinearGradient(90, 90, 90, 90)
				//
				// gradient.addColorStop(0.0803, 'rgba(21, 191, 253, 0)')
				// gradient.addColorStop(0.6915, 'rgba(21, 191, 253, 0.7)')
				// gradient.addColorStop(0.9795, 'rgba(156, 55, 253, 0.7)')

				canvas.strokeStyle = 'url(#gradient-1)'
				canvas.fillStyle = 'rgba(255, 255, 255, 0.05)'

				roundRect(canvas)
			}
		}

		return () => {
			canvasRef.current = null
		}
	}, [ canvasRef ])

	return (
		<div className={ styles() }>
			<canvas
				width={ 180 }
				height={ 230 }
				ref={ canvasRef }
				className={ styles('Container-Canvas') }
			/>
			{
				!isCanvas && (
					<div className={ styles('Container') } />
				)
			}
			<div className={ styles('Content') }>Content</div>
		</div>
	)
}
