import { renderHook } from '@testing-library/react-hooks'

import { useSearch } from '../../../../src/lib/'

describe('useSearch should', () => {
	test('returns default values as provided', () => {
		const testArr = ['test1', 'test2', 'test3']
		const { result } = renderHook(() => useSearch({data: testArr, search: ''}))

		expect(result.current).toStrictEqual(testArr)
	})

	test('returns result from string\'s array based on a given search', () => {
		const testArr = ['test1', 'test2', 'test3']
		const { result } = renderHook(() => useSearch({data: testArr, search: 'test1'}))

		expect(result.current).toStrictEqual(['test1'])
	})

	test('returns multiple results from string\'s array based on a given search', () => {
		const testArr = ['test1', 'selector', 'thumbnail', 'harmony', 'elector']
		const { result } = renderHook(() => useSearch({data: testArr, search: 'l'}))

		expect(result.current).toStrictEqual(['selector', 'thumbnail', 'elector'])
	})

	test('returns results from object based on a given search', () => {
		const testArr = [{test: 'test1', id: 0}, {test: 'test2', id: 1}, {test: 'test3', id: 2}]
		const { result } = renderHook(() => useSearch({data: testArr, search: 'test1', type: 'test'}))

		expect(result.current).toEqual([{test: 'test1', id: 0}])
	})

	test('returns multiple results from object based on a given search', () => {
		const testArr = [{test: 'test1', id: 0}, {test: 'test2', id: 1}, {test: 'test1', id: 2}]
		const { result } = renderHook(() => useSearch({data: testArr, search: 'test1', type: 'test'}))

		expect(result.current).toEqual([{test: 'test1', id: 0}, {test: 'test1', id: 2}])
	})

	test('returns correct result from array with numbers', () => {
		const testArr = [15043,221,45,75,315,201,9]
		const { result } = renderHook(() => useSearch({data: testArr, search: 201}))

		expect(result.current).toEqual([201])
	})

	test('returns multiple results from array with numbers', () => {
		const testArr = [15043,221,45,75,315,201,9]
		const { result } = renderHook(() => useSearch({data: testArr, search: 4}))

		expect(result.current).toEqual([15043, 45])
	})

	test('returns empty array if the given search is missmatched', () => {
		const testArr = [{test: 'test1', id: 0}, {test: 'test2', id: 1}, {test: 'test1', id: 2}]
		const { result } = renderHook(() => useSearch({data: testArr, search: 'test4', type: 'test'}))

		expect(result.current).toEqual([])
	})


})