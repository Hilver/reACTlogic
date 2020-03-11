import React, { useState, useEffect } from 'react'

interface IRefEl {
	current: HTMLElement
}

const useResolution = (refEl: IRefEl) => {
	const [resolution, setResolution] = useState()
	
	useEffect(() => {
		const element = refEl.current
		const getResolution = () => {
			const {width, height, top, bottom, right, left, x, y} = element.getBoundingClientRect()
			setResolution({
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
		window.addEventListener('resize', getResolution)
		return () => window.removeEventListener('resize', getResolution)
	},[])
	
	return {...resolution}

}

export default useResolution