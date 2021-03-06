import React from 'react'
import TestRenderer from 'react-test-renderer'
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'

import { useScroll } from '../../../../lib'
import App from '../../../../app/App'

interface IData {
	element?: {
		current: HTMLElement;
	};
	debounce?: boolean;
	delayTime?: number;
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
			delayTime: 300
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
	test.todo('return expected values when scrolled on passed element')
	test('throw an error if element is not a div, table or td', () => {
		const span = document.createElement('span')

		const { result } = renderHook(() => useScroll({element: {current: span}}))

		expect(result.error).toEqual(Error('Scrolled element should be a div, table or td!'))
	})
	test('to not throw an error if element is a div, table or td', () => {
		const div = document.createElement('div')
		const table = document.createElement('table')
		const td = document.createElement('td')

		const [caseDiv, caseTable, caseTd] = [
			renderHook(() => useScroll({element: {current: div}})),
			renderHook(() => useScroll({element: {current: table}})),
			renderHook(() => useScroll({element: {current: td}}))
		]

		expect(caseDiv.result.error).toBeUndefined()
		expect(caseDiv.result).toBeDefined()
		expect(caseTable.result.error).toBeUndefined()
		expect(caseTable.result).toBeDefined()
		expect(caseTd.result.error).toBeUndefined()
		expect(caseTd.result).toBeDefined()
	})
	test('throw an error if delayTime is less than zero', () => {
		const div = document.createElement('div')

		const { result } = renderHook(() => useScroll({element: {current: div}, delayTime: -25}))

		expect(result.error).toEqual(Error('DelayTime should be greater than zero!'))
	})
})

