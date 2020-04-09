import React, { useLayoutEffect, useState, RefObject } from 'react'
import { debounce, throttle } from '../../utils/'
import useRect from '../Measurement/useRect'

import errorValidator from '../../utils/error-validator'

export interface IData {
	element?: RefObject<HTMLElement>;
	debounce?: boolean;
	delayTime?: number;
	targetElement?: RefObject<HTMLElement>;
}

export interface IScrollResult {
	x: number;
	y: number;
	isBottom: boolean;
	isTop: boolean;
	isTargetReached: boolean;
}

const scrollableTags = ['DIV', 'TABLE', 'TD']

const useScroll = (data?: IData): IScrollResult => {
	if (data !== undefined) {
		if (data.element.current !== undefined) {
			errorValidator([scrollableTags.every(el => el !== data.element.current.nodeName), 'Scrolled element should be a div, table or td!', 'typeError'])
		}
		if (data.delayTime !== undefined) {
			errorValidator(
				[typeof data.delayTime !== 'number', 'DelayTime should be a number!', 'typeError'],
				[data.delayTime < 0, 'DelayTime should be greater than zero!', 'rangeError']
			)
		}
		if (data.debounce !== undefined) {
			errorValidator([typeof data.debounce !== 'boolean', 'Debounce should be a boolean!', 'typeError'])
		}
		if (data.targetElement !== undefined) {
			if (data.targetElement.current !== undefined) {
				errorValidator([data.targetElement.current.tagName === undefined, 'Target should be an HTML element!'])
			}
		}
	}
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
		isBottom: false,
		isTop: true,
		isTargetReached: false
	})
	const { element, delayTime, targetElement }: IData = data || {}
	const { body } = document
	const innerTargetElement = useRect(targetElement)

	const target: HTMLElement | Window = element === undefined ? window : element.current
	const delayFn = data === undefined || data.debounce === undefined || !data.debounce ? throttle : debounce

	useLayoutEffect(() => {
		const handleState = delayFn((e: React.UIEvent): void => {
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
				isTop: eventTarget.parentElement ? scrollTop === 0 : window.scrollY === 0,
				isBottom: eventTarget.parentElement ?
					scrollTop + clientHeight >= scrollHeight :
					window.scrollY + window.innerHeight >= body.offsetHeight,
				isTargetReached: innerTargetElement.top - clientHeight < (scrollTop || window.scrollY)
			})
		}, delayTime || 0)

		const handleScrollPosition = (e: Event): void => handleState(e)

		if (target) {
			target.addEventListener('scroll', handleScrollPosition)
		}

		return (): void => {
			if (target) {
				target.removeEventListener('scroll', handleScrollPosition)
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[target])

	return {...position}
}

export default useScroll