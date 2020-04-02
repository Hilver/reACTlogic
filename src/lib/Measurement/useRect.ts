import React, { useState, useEffect } from 'react'

interface IRefEl {
	current: HTMLElement;
}

interface IRectResult {
	width: number;
	height: number;
	top: number;
	bottom: number;
	right: number;
	left: number;
	x: number;
	y: number;
}

const scrollableTags = ['div', 'table', 'td']

const useRect = (refEl?: IRefEl): IRectResult => {
	if ( refEl !== undefined) {
		if (scrollableTags.every(el => el !== refEl.current.nodeName)) {
			throw Error('Element which can be scrolled should be a div, table or td!')
		}
	}
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return {...rect}
}

export default useRect