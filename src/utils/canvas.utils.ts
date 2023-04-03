import { ICanvasRadius } from '@interfaces/canvas.types'

export const roundRect = (
	canvas: CanvasRenderingContext2D,
	x: number = 0,
	y: number = 0,
	width: number = 180,
	height: number = 230,
	radius: number = 16
	// fill,
	// stroke
) => {
	console.log(canvas)

	const canvasRadius: ICanvasRadius = {
		tl: radius,
		tr: radius,
		br: radius,
		bl: radius
	}

	canvas.beginPath() // запускает новый путь, опуская список подпутей

	canvas.moveTo(x + canvasRadius.tl, y)
	canvas.lineTo(x + width - canvasRadius.tr, y)
	canvas.quadraticCurveTo(x + width, y, x + width, y + canvasRadius.tr)
	canvas.lineTo(x + width, y + height - canvasRadius.br)
	canvas.quadraticCurveTo(x + width, y + height, x + width - canvasRadius.br, y + height)
	canvas.lineTo(x + canvasRadius.bl, y + height)
	canvas.quadraticCurveTo(x, y + height, x, y + height - canvasRadius.bl)
	canvas.lineTo(x, y + canvasRadius.tl)
	canvas.quadraticCurveTo(x, y, x + canvasRadius.tl, y)
	canvas.closePath()

	canvas.fill()
	canvas.stroke()

	// if (typeof stroke === 'undefined') {
	// 	stroke = true
	// }
	// if (typeof radius === 'undefined') {
	// 	radius = 5
	// }
	// if (typeof radius === 'number') {
	// 	radius = { tl: radius, tr: radius, br: radius, bl: radius }
	// } else {
	// 	var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
	// 	for (var side in defaultRadius) {
	// 		radius[side] = radius[side]
	// 			// || defaultRadius[side]
	// 	}
	// }
	// ctx.beginPath()
	// ctx.moveTo(x + radius.tl, y)
	// ctx.lineTo(x + width - radius.tr, y)
	// ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
	// ctx.lineTo(x + width, y + height - radius.br)
	// ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
	// ctx.lineTo(x + radius.bl, y + height)
	// ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
	// ctx.lineTo(x, y + radius.tl)
	// ctx.quadraticCurveTo(x, y, x + radius.tl, y)
	// ctx.closePath()
	// if (fill) {
	// 	ctx.fill()
	// }
	// if (stroke) {
	// 	ctx.stroke()
	// }
}
