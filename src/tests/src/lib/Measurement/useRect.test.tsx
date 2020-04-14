import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { useRect } from '../../../../lib'

describe('useRect should', () => {
	test('returns default values on mounted', () => {
		const { result } = renderHook(() => useRect())

		expect(result.current).toMatchObject({
			width: 0,
			height: 0,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0
		})
	})
	test.todo('returns updated values when window resized')
	test.todo('returns rect values of provided element')
	test.todo('returns updated rect values of provided element when window resized')
})