import { FC, ReactNode } from 'react'

import { Container } from '@components/common/Container'
import { Icon } from '@components/common/Icon'

import { ESVG } from '@constants/svg.const'

import { aboutUsDescription, mentorsOptions, TInteractiveLine } from '@constants/about-us.const'

import styles from './AboutUs.module.scss'

export const AboutUs: FC = () => {
	const renderInteractiveLine = ({ type, position }: TInteractiveLine): ReactNode => (
		type === ESVG.CURVED_LINE
			? (
				<Icon
					name={ ESVG.CURVED_LINE }
					className={ `fill-[url(#gradient-1)] ${ position }` }
					size={ [ 199, 157 ] }
				/>
			)
			: (
				<img
					src='/images/svg/straight-line.svg'
					alt=''
				/>
			)
	)

	const renderMentorCards = (): ReactNode => (
		mentorsOptions.map(({
				interactiveLine,
				photo,
				name,
				description
			}) =>
				<li
					key={ name }
					className='relative'
				>
					{ renderInteractiveLine(interactiveLine) }
					<span
						className={ `${ styles.mentor_card } ${ photo.position }` }
						style={ {
							backgroundImage: `url(/images/mentors/mentor-${ photo.image }.webp`
						} }
					>
						<div className='py-3'>
							<h4 className='mb-1'>{ name }</h4>
							<p className='text-sm'>{ description }</p>
						</div>
					</span>
				</li>
		)
	)

	return (
		<section>
			<Container title='About Us'>
				<div className='flex pt-14'>
					<div className='min-w-[606px] mr-4'>
						<h3 className='text-center mb-2.5'>Mentors</h3>
						<ul className='flex justify-center'>
							{ renderMentorCards() }
						</ul>
					</div>

					<div className={ `relative h-[483px] ${ styles.description }` }>
						<p
							className='
								flex items-end
								max-w-[486px] h-[200px]
								max-xl:text-sm
							'
						>{ aboutUsDescription }
						</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
