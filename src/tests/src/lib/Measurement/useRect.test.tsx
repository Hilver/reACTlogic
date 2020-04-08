import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render, getByTestId} from '@testing-library/react'

import { useRect } from '../../../../lib'

const TestingApp = (): React.ReactElement => {
	return (
		<div data-testid='test'></div>
	)
}

const { container } = render(<TestingApp/>)

const testingContainer = getByTestId(container, 'test')

describe('useRect should', () => {
	beforeAll(() => {
		Object.defineProperty(testingContainer, 'getBoundClientRect', { configurable: true, value: () => ({width: 600, height: 300, top: 0, bottom: 0}) })
	})
	test('returns default values on mounted', () => {
		const { result } = renderHook(() => useRect({current: testingContainer}))

		expect(result.current).toMatchObject({
			width: 0,
			height: 0,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0
		})
	})
	// ** Playing with jsdom **
	// test.only('TODO', () => {

	// 	const { result } = renderHook(() => useRect({current: testingContainer}))

	// 	expect(result.current).toMatchObject({
	// 		width: 200,
	// 		height: 120,
	// 		top: 0,
	// 		bottom: 0,
	// 		right: 0,
	// 		left: 0,
	// 		x: undefined,
	// 		y: undefined
	// 	})
	// })
})