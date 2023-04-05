import { FC, Fragment } from 'react'

export const SVGHelper: FC = () => {
	return (
		<Fragment>
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

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='absolute h-0 w-0'
			>
				<clipPath
					id='clip-path-card-wrapper-technology'
					clipPathUnits='objectBoundingBox'
				>
					<path
						d='M1,0.07 L1,0.802 C1,0.823,0.99,0.843,0.969,0.855 L0.747,0.988 C0.732,0.997,0.714,1,0.695,1 L0.089,1 C0.041,1,0.003,0.972,0.003,0.934 L0.003,0.07 C0.003,0.032,0.041,0.002,0.089,0.002 L0.917,0.002 C0.964,0.002,1,0.032,1,0.07'
					/>
				</clipPath>
			</svg>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='absolute h-0 w-0'
			>
				<clipPath
					id='clip-path-card-wrapper-faq'
					clipPathUnits='objectBoundingBox'
				>
					<path
						d='M 0.001 0.871V 0.449L 0.038 0.008H 0.989 C 0.995 0.008 0.999 0.062 0.999 0.129V 0.568L 0.958 0.992H 0.011 C 0.005 0.992 0.001 0.938 0.001 0.871Z'
					/>
				</clipPath>
			</svg>
		</Fragment>
	)
}
