import { renderHook, act } from '@testing-library/react-hooks'
import slider from '../../../../src/lib/'

const { useSlider } = slider

describe("useSlider should", () => {
	test("returns a default values", () => {
		const { result } = renderHook(() => useSlider(1000, 4))

		expect(result.current.isPlaying).toBeFalsy()
		expect(result.current.index).toEqual(0)
	})

	test("changed playing state", () => {
		const { result } = renderHook(() => useSlider(1000, 4))

		expect(result.current.isPlaying).toBeFalsy()
		act(() => {
			result.current.togglePlaying()
		})
		expect(result.current.isPlaying).toBeTruthy()

		act(() => {
			result.current.togglePlaying()
		})
		expect(result.current.isPlaying).toBe(false)
	})

	test("increment and decrease index number", () => {
		const { result } = renderHook(() => useSlider(1000, 4))

		expect(result.current.index).toEqual(0)
		act(() => {
			result.current.nextSlide() 
		})
		expect(result.current.index).toEqual(1)
		act(() => {
			result.current.prevSlide()
			result.current.prevSlide()
		})
		expect(result.current.index).toEqual(3)
	})

	test("changed index upon a called time", async () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useSlider(1000, 4))
		
		act(() => {
			result.current.togglePlaying()
		})
		expect(result.current.isPlaying).toBe(true)
		expect(result.current.index).toBe(0)

		act(() => {
			jest.advanceTimersByTime(2000)
		})
		expect(result.current.index).toBe(2)

		act(() => {
			jest.advanceTimersByTime(7000)
		})
		expect(result.current.index).toBe(1)

		act(() => {
			result.current.togglePlaying()
			jest.advanceTimersByTime(2000)
		})
		expect(result.current.index).toBe(1)
	})
})