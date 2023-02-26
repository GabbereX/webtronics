import { FC, useEffect, useRef, useState } from 'react'
import { Container } from '@components/common/Container'
import { Nullable } from '@interfaces/global.types'

export const Hero: FC = () => {
	const [ buttonContainerHeight, setButtonContainerHeight ] = useState<number>(180)
	const developerTextRef = useRef<Nullable<HTMLSpanElement>>(null)

	useEffect(() => {
		if (developerTextRef.current) {
			setButtonContainerHeight(
				developerTextRef.current?.getBoundingClientRect().height
			)

			console.log(developerTextRef.current?.getBoundingClientRect().height)
		}
	}, [ developerTextRef.current ])

	return (
		<section className='py-19'>
			<Container>
				<div className='flex relative'>
					<h1 className='whitespace-pre'>
					<span className='mr-[57px]'>
						Front-End
					</span>
						<span
							ref={ developerTextRef }
							className='absolute top-full left-[312px]'
						>
						Developer
					</span>
						<span className='absolute text-h3 top-[200%] right-[45px]'>
						Courses
					</span>
					</h1>
					<p className='flex items-center	max-w-[360px]'>
						Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach
						(and more).
					</p>
				</div>

				<div className={ `flex items-center h-[${ buttonContainerHeight }px]` }>
					<button className='bg-gradient-2 px-[32px] py-[24px] rounded-lg text-blue-30'>
						Start my career change
					</button>
				</div>
			</Container>
		</section>
	)
}
