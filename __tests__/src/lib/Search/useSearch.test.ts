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
	test('throws an error if input data is mixed with objects and primitive types', () => {
		const mixedArr1 = [{test: 'test1', id: 0}, 'test', {test: 'test2', id: 1}]
		const mixedArr2 = [43, {test: 'test1', id: 0}, 'test']

		const [result1, result2] = [
			renderHook(() => useSearch({data: mixedArr1, search: 't', type: 'test'})),
			renderHook(() => useSearch({data: mixedArr2, search: 't', type: 'test'}))
		]

		expect(result1.result.error).toEqual(Error('Don\'t mix data object with others types!'))
		expect(result2.result.error).toEqual(Error('Don\'t mix data object with others types!'))
	})
	test('throws an error if input data is an object and type is missing', () => {
		const data = [{test: 'test1', id: 0}, {test: 'test2', id: 1}, {test: 'test3', id: 2}]

		const { result } = renderHook(() => useSearch({data, search: '' }))

		expect(result.error).toEqual(Error('Missing \'type\' option!'))
	})
	test('throws an error if type is not a key in searched object', () => {
		const data = [{test: 'test1', id: 0}, {test: 'test2', id: 1}, {test: 'test3', id: 2}]

		const { result } = renderHook(() => useSearch({data, search: '', type: 'zulugula' }))

		expect(result.error).toEqual(Error('Invalid \'type\' property. Type should match at least one of searched object key!'))
	})
	test('returns given queries by caseSensitive', () => {
		const data = ['TEST', 'test', 'tEEsTT2323', 'Test']

		const [
			query1,
			query2
		] = [
			renderHook(() => useSearch({data, search: 'T'})),
			renderHook(() => useSearch({data, search: 'T', caseSensitive: false}))
		]

		expect(query1.result.current).toEqual(['TEST', 'tEEsTT2323', 'Test'])
		expect(query2.result.current).toEqual(['TEST', 'test', 'tEEsTT2323', 'Test'])
	})
})