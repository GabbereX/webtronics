import {FC} from 'react'
import {Container} from '@components/Container'
import {CardWrapper} from '@components/CardRoot'
import {ESubstractSVG} from '@constants/svg.const'

export const Technologies: FC = () => {
    return (
        <section>
            <Container
                title={`Programming\ntechnologies`}
                classes='py-19 flex flex-col items-center'
            >
                <p className='max-w-[432px] text-center mb-6'>
                    By the end, you’ll have the portfolio and interview skills you need to start your new career.
                </p>

                <div className='mb-6'>
                    <CardWrapper
                        classes='w-[180px] h-[200px]'
                    >
                        Content
                    </CardWrapper>
                </div>

                <div className='mb-6'>
                    <CardWrapper
                        classes='w-[181px] h-[230px]'
                        substract={ESubstractSVG.TEXHNOLOGY}
                        backgroundRevert
                    >
                        Content
                    </CardWrapper>
                </div>

                <div className='mb-6'>
                    <CardWrapper
                        classes='w-[703px] h-[62px]'
                        substract={ESubstractSVG.FAQ}
                    >
                        Content
                    </CardWrapper>
                </div>
            </Container>
        </section>
    )
}
