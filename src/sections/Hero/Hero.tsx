import { FC } from 'react'
import { Container } from '@components/common/Container'

export const Hero: FC = () => {
	return (
		<section>
			<Container>
				<div className='flex justify-between relative'>
					<h1 className='whitespace-pre text-h1-vw xl:text-h1'>
						Front-End
						<span className='absolute top-full left-[312px]'>
							<span className='relative'>
								Developer
								<span className='absolute text-h3-vw top-full right-[-5vw] xl:text-h3 xl:right-[-88px]'>
									Courses
								</span>
							</span>
						</span>
					</h1>
					<p className='flex items-center	pl-[57px] pr-0 text-sm xl:text-base pr-[27px]'>
						Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach
						(and more).
					</p>
				</div>

				<div className='flex items-center h-45-vw xl:h-45'>
					<button className='bg-gradient-2 px-8 py-6 rounded-lg text-blue-30'>
						Start my career change
					</button>
				</div>
			</Container>
		</section>
	)
}
