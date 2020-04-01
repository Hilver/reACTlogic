import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render} from '@testing-library/react'

import { useRect } from '../../../../src/lib'
import App from '../../../../src/app/App'

describe('useRect should', () => {
	test('returns default values on mounted', () => {
		const div = render(
			<App/>
		)
		const { result } = renderHook(() => useRect({current: div.container}))

		expect(result.current).toMatchObject({
			width: 0,
			height: 0,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			x: undefined,
			y: undefined
		})
	})
})