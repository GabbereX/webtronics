import { FC } from 'react'

export const LinearGradients: FC = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='absolute h-0 w-0 invisible'
		>
			<defs>
				<linearGradient
					id='gradient-1'
					x1='176.456'
					y1='15.2325'
					x2='100.289'
					y2='198.312'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#15BFFD' />
					<stop
						offset='1'
						stopColor='#9C37FD'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}
