import { FC } from 'react'
import { Container } from '@components/common/Container'
import { Icon } from '@components/common/Icon'
import { EIcons } from '@constants/icons.const'
import image from '@public/images/mentors/center.jpg'

export const AboutUs: FC = () => {
	return (
		<section>
			<Container title='About Us'>
				<div className='flex w-[606px] justify-center'>
					<div className='relative'>
						<Icon
							className='fill-[url(#gradient-1)] translate-x-1'
							name={ EIcons.CURVED_LINE }
							size={ [ 199, 157 ] }
						/>
					</div>

					<div className='relative'>
						<img
							src='/images/svg/straight-line.svg'
							alt=''
						/>

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

					<div className='relative'>
						<Icon
							className='fill-[url(#gradient-1)] scale-x-[-1] -translate-x-1'
							name={ EIcons.CURVED_LINE }
							size={ [ 199, 157 ] }
						/>
					</div>


				</div>
			</Container>
		</section>
	)
}
