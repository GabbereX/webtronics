import { FC } from 'react'

import StraightLineSVG from './StraightLineSVG'
import CurvedLineSVG from './CurvedLineSVG'

import image from '@public/images/mentors/center.jpg'

export const MentorsSVG: FC = () => {

	console.log(image)

	return (
		<div className='flex'>
			<div>
				<CurvedLineSVG />
			</div>
			<div className='relative'>
				<StraightLineSVG />
				<span
					className='
						absolute w-[188px] h-[188px] translate-x-[-50%]
						border-2 rounded-full
					'
					style={ {
						backgroundImage: `url(${ image.src })`
					} }
				>
					Photo
				</span>
			</div>
			<div>
				<CurvedLineSVG isMirror />
			</div>
		</div>
	)
}
