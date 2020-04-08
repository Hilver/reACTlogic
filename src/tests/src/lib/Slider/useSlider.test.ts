import { renderHook, act } from '@testing-library/react-hooks'
import { useSlider } from '../../../../lib'

describe('useSlider should', () => {
	test('returns a default values', () => {
		const { result } = renderHook(() => useSlider(4, 1000))

		expect(result.current.isPlaying).toBeFalsy()
		expect(result.current.index).toEqual(0)
	})

	test('changed playing state', () => {
		const { result } = renderHook(() => useSlider(4, 1000))

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

	test('increment and decrease index number', () => {
		const { result } = renderHook(() => useSlider(4, 1000))

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

	test('changed index upon a called time', async () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useSlider(4, 1000))

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

	test('change slides after 2000ms if no changeSpeed set', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useSlider(4))

		expect(result.current.index).toEqual(0)
		act(() => {
			result.current.togglePlaying()
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.index).toEqual(0)
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.index).toEqual(1)
	})
	test('throws an error if indexLimit is undefined or null', () => {
		const { result } = renderHook(() => useSlider(null))

		expect(result.error).toEqual(Error('Index Limit is required!'))
	})
	test('throws an error if indexLimit is zero or less', () => {
		const { result } = renderHook(() => useSlider(-2))

		expect(result.error).toEqual(Error('Index Limit should be a number greater than zero!'))
	})
	test('throws an error if change speed is less than zero', () => {
		const { result } = renderHook(() => useSlider(2, -2000))

		expect(result.error).toEqual(Error('ChangeSpeed should be greater than zero!'))
	})
})