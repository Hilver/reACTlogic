import React, { useState, useEffect } from 'react'

interface IRefEl {
	current: HTMLElement;
}

interface IResult {
	width: number;
	height: number;
	top: number;
	bottom: number;
	right: number;
	left: number;
	x: number;
	y: number;
}

const useRect = (refEl?: IRefEl): IResult => {
	const [rect, setRect] = useState({
		width: 0,
		height: 0,
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		x: 0,
		y: 0
	})
	const { body } = document
	
	useEffect(() => {
		const element = refEl !== undefined ? refEl.current : body
		const handleRect = (): void => {
			const {width, height, top, bottom, right, left, x, y} = element.getBoundingClientRect()
			setRect({
				width,
				height,
				top,
				bottom,
				right,
				left,
				x,
				y
			})
		}
		handleRect()
		window.addEventListener('resize', handleRect)
		return (): void => window.removeEventListener('resize', handleRect)
	},[])
	
	return {...rect}
}

export default useRect