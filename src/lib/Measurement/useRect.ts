import React, { useState, useEffect } from 'react'

export interface IRefEl {
	current: HTMLElement;
}

export interface IRectResult {
	width: number;
	height: number;
	top: number;
	bottom: number;
	right: number;
	left: number;
}

const useRect = (refEl?: IRefEl): IRectResult => {
	const [rect, setRect] = useState({
		width: 0,
		height: 0,
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	})
	const { body } = document

	useEffect(() => {
		const element = refEl !== undefined ? refEl.current : body
		const handleRect = (): void => {
			const {width, height, top, bottom, right, left} = element.getBoundingClientRect()
			setRect({
				width,
				height,
				top,
				bottom,
				right,
				left
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