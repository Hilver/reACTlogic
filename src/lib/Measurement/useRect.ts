import React, { useState, useEffect } from 'react'

interface IRefEl {
	current: HTMLElement
}

const useRect = (refEl: IRefEl) => {
	const [rect, setRect] = useState()
	
	useEffect(() => {
		const element = refEl.current
		const handleRect = () => {
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
		return () => window.removeEventListener('resize', handleRect)
	},[])
	
	return {...rect}
}

export default useRect