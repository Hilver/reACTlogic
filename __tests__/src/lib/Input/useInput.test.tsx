import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, fireEvent} from '@testing-library/react'
import { useInput } from '../../../../src/lib/'

import App from '../../../../src/app/App'

const r = renderHook(() => useInput())

describe('useSlider should', () => {
	test('returns a default values', () => {
		const [value, setValue] = r.result.current

		expect(value).toBe(null)
	})
	// test("returns provided value", () => {
	// 	const {getByTestId} = render(
	// 	 <App />
	// 	)
	// 	let textFromInput = getByTestId("textFromInput")
	// 	let input = (getByTestId("textInput") as HTMLInputElement)
	// 	input.value = "test123"


	// 	expect(textFromInput).toBe("test123")

	// })
})