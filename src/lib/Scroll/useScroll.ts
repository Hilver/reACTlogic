import React, {useLayoutEffect, useState, EventHandler} from 'react'
import { throttle } from '../../utils/'

interface IData {
	element: {
		current: HTMLElement | undefined
	},
	throttleTime: number | undefined
}

const useScroll = (data: IData) => {
	const [position, setPosition] = useState(null)
	const { element, throttleTime } = data
	const target: HTMLElement | any = element === undefined ? window : element

	useLayoutEffect(() => {
		const handleScrollPosition = (e: React.UIEvent<HTMLElement>): void => {
			setPosition({
				y: e.currentTarget.scrollTop,
				x: e.currentTarget.scrollLeft
			})
		}	
	
		const f = () => target.addEventListener('scroll', handleScrollPosition)
		
		throttle(f, throttleTime || 250)
		return target.removeEventListener('scroll', handleScrollPosition)
	},[])

	return position
}

export default useScroll