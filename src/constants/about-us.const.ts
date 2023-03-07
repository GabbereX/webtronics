import { EPosition } from '@constants/global.consts'

interface IMentorOption {
	position: EPosition
	name: string
	description: string
}

export const mentorsOptions: IMentorOption[] = [
	{
		position: EPosition.LEFT,
		name: 'Wade Warren',
		description: 'Front-end engineers work closely with designers'
	},

	{
		position: EPosition.CENTER,
		name: 'Kristin Watson',
		description: 'Front-end engineers work closely with designers'
	},

	{
		position: EPosition.RIGHT,
		name: 'Robert Fox',
		description: 'Front-end engineers work closely with designers'
	}
]

export const aboutUsDescription = 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
