import { FC } from 'react'
import { Container } from '@components/Container'

export const Hero: FC = () => {
	return (
		<section className='mb-8'>
			<Container>
				<div className='flex justify-between relative'>
					<h1 className='whitespace-pre text-h1 max-xl:text-h1-vw'>
						Front-End
						<span className='absolute top-full left-[312px]'>
							<span className='relative'>
								Developer
								<span
									className='
									absolute text-h3 top-full right-[-88px]
									max-2xl:right-[-5vw]
									max-xl:text-h3-vw
								'>
									Courses
								</span>
							</span>
						</span>
					</h1>
					<p
						className='
							flex items-center	pl-[57px] pr-[27px] text-base
							max-xl:text-sm max-2xl:pr-0
						'
					>
						Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach
						(and more).
					</p>
				</div>

				<div className='flex items-center h-45 max-xl:h-45-vw'>
					<button className='bg-gradient-2 px-8 py-6 rounded-lg text-blue-30'>
						Start my career change
					</button>
				</div>
			</Container>
		</section>
	)
}
