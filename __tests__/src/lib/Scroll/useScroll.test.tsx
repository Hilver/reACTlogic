import React, {useRef, ReactElement} from 'react'
import TestRenderer from 'react-test-renderer'
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'

import { useScroll } from '../../../../src/lib'
import App from '../../../../src/app/App'

interface IData {
	element?: {
		current: HTMLElement;
	};
	throttleTime?: number;
}

interface IScrollResult {
	result: {
		current: {
			x: number;
			y: number;
			isBottom: boolean;
			isTop: boolean;
		};
	};
}

const { act } = TestRenderer
const r = (data?: IData): IScrollResult => renderHook(() => useScroll(data))

describe('useScroll should', () => {
	test('returns default values on mounted', () => {
		const { container } = render(
			<App/>
		)

		const { result } = renderHook(() => useScroll({
			element: {
				current: container
			},
			throttleTime: 300
		}))

		expect(result.current).toMatchObject({
			x: 0,
			y: 0,
			isBottom: false,
			isTop: true
		})
	})
	test('returns expected values if no element is passed in', () =>{
		const { result } = r()

		act(() => {
			fireEvent.scroll(window, { target: { scrollY: 100 } })
		})

		expect(result.current).toMatchObject({
			x: 0,
			y: 100,
			isBottom: true,
			isTop: false
		})
	})
	test('throw an error if element is not a div, table or td', () => {
		const span = document.createElement('span')

		const { result } = renderHook(() => useScroll({element: {current: span}}))

		expect(result.error).toEqual(Error('Scrolled element should be a div, table or td!'))
	})
	test('return expected values of passed element', () => {
		// const { getByTestId } = render(
		// 	<App/>
		// )

		// const scrollDiv = getByTestId("scrollDiv")

		// const { result } = r({
		// 	element: {
		// 		current: scrollDiv
		// 	}
		// })

		// act(() => {
		// 	fireEvent.scroll(scrollDiv, { currentTarget: {scrollLeft: 0, scrollTop: 0}})
		// })

		// expect(result.current).toMatchObject({
		// 	x: 0,
		// 	y: 230,
		// 	isBottom: false,
		// 	isTop: false
		// })
	})
})

