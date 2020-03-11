import { renderHook, act } from '@testing-library/react-hooks'
import resolution from '../../../../src/lib/'

const { useResolution } = resolution

describe("useResolution should", () => {
	test("return getBoundingClientRect values", () => {
		const div = document.createElement("div")
		div.setAttribute("style", "width: 200px; height: 200px;")
			document.body.appendChild(div)
		const { result } = renderHook(() => useResolution({current: div}))

		expect(result).toBe(200)
	})
})