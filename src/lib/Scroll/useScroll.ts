import React, { useLayoutEffect, useState, RefObject } from 'react'
import { throttle } from '../../utils/'

interface IData {
	element?: RefObject<HTMLElement>
	throttleTime?: number
}

const useScroll = (data?: IData) => {
	const [position, setPosition] = useState({
		x: 0, 
		y: 0, 
		isBottom: false,
		isTop: true
	})
	const { element, throttleTime } = data || {}
	const { body } = document

	const target: HTMLElement | Window = element === undefined ? window : element.current
	
	useLayoutEffect(() => {
		const handleState = throttle((e: React.UIEvent): void => {
			const eventTarget = e.currentTarget
			const { 
				scrollTop,
				scrollLeft,
				clientHeight,
				scrollHeight
			} = eventTarget
			setPosition({
				y: scrollTop || window.scrollY,
				x: scrollLeft || window.scrollX,
				isTop: scrollTop === 0 || window.scrollY === 0,
				isBottom: eventTarget ? 
					scrollTop + clientHeight >= scrollHeight :
					window.scrollY + window.innerHeight >= body.offsetHeight
			})
		}, throttleTime || 0)
	
		const handleScrollPosition = (e: Event): void => handleState(e)
		
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