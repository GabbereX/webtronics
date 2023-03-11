import { FC } from 'react'
import { Container } from '@components/Container'
import { CardWrapper } from '@components/CardRoot'

export const Technologies: FC = () => {
	return (
		<section>
			<Container
				title={ `Programming\ntechnologies` }
				classes='py-19 flex flex-col items-center'
			>
				<p className='max-w-[432px] text-center'>
					By the end, you’ll have the portfolio and interview skills you need to start your new career.
				</p>

				<div>
					<CardWrapper />
				</div>
			</Container>
		</section>
	)
}
