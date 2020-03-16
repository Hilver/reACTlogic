import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent} from '@testing-library/react'

import { useScroll } from '../../../../src/lib'
import App from '../../../../src/app/App'

describe("useScroll should", () => {
	test("returns default values on mounted", () => {
		const div = render(
			<App/>
		)

		const { result } = renderHook(() => useScroll({
			element: {
				current: div.container
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
	test("returns expected values if no element is passed in", () =>{
		const { result } = renderHook(() => useScroll())

		fireEvent.scroll(window, { target: { scrollY: 100 } })


		expect(result.current).toMatchObject({
			x: 0,
			y: 100,
			isBottom: true,
			isTop: false
		})
	})
	// test("return expected values of passed element", () => {
	// 	const { getByTestId } = render(
	// 		<App/>
	// 	)
				
	// 	const scrollDiv = getByTestId("scrollDiv")

	// 	const { result } = renderHook(() => useScroll({
	// 		element: {
	// 			current: scrollDiv
	// 		}
	// 	}))

	// 	fireEvent.scroll(scrollDiv, { currentTarget: {scrollLeft: 0, scrollTop: 0}})

	// 	expect(result.current).toMatchObject({
	// 		x: 0,
	// 		y: 230,
	// 		isBottom: false,
	// 		isTop: false
	// 	})
	// })
})