import { ESVG } from '@constants/svg.const'

export type TInteractiveLine = {
	type: ESVG.CURVED_LINE | ESVG.STRAIGHT_LINE
	position?: string
}

interface IMentorOption {
	interactiveLine: TInteractiveLine
	photo: {
		image: 'left' | 'center' | 'right',
		position: string
	}
	name: string
	description: string
}

export const mentorsOptions: IMentorOption[] = [
	{
		interactiveLine: {
			type: ESVG.CURVED_LINE,
			position: 'translate-x-1'
		},
		photo: {
			image: 'left',
			position: 'left-[-50%]'
		},
		name: 'Wade Warren',
		description: 'Front-end engineers work closely with designers'
	},

	{
		interactiveLine: {
			type: ESVG.STRAIGHT_LINE
		},
		photo: {
			image: 'center',
			position: 'translate-x-[-50%]'
		},
		name: 'Kristin Watson',
		description: 'Front-end engineers work closely with designers'
	},

	{
		interactiveLine: {
			type: ESVG.CURVED_LINE,
			position: 'scale-x-[-1] -translate-x-1'
		},
		photo: {
			image: 'right',
			position: 'right-[-50%]'
		},
		name: 'Robert Fox',
		description: 'Front-end engineers work closely with designers'
	}
]

export const aboutUsDescription = 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
