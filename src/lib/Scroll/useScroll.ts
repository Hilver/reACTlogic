import React, { useLayoutEffect, useState, RefObject } from 'react'
import { throttle } from '../../utils/'

interface IData {
	element?: RefObject<HTMLElement>
	throttleTime?: number
}

const useScroll = (data?: IData) => {
	const [position, setPosition] = useState({x: 0, y: 0})
	const { element, throttleTime } = data || {}

	const target: HTMLElement | Window = element === undefined ? window : element.current
	
	useLayoutEffect(() => {
		const s = throttle((e: React.UIEvent): void => setPosition({
			y: e.currentTarget.scrollTop || window.scrollY,
			x: e.currentTarget.scrollLeft || window.scrollX
		}), throttleTime || 0)
	
		const handleScrollPosition = (e: Event): void => s(e)
		
		if(target) {
			target.addEventListener('scroll', handleScrollPosition)
		}		
		
		return () => { 
			if(target) {
				target.removeEventListener('scroll', handleScrollPosition)
			}
		}
	},[target])

	return {...position}
}

export default useScroll