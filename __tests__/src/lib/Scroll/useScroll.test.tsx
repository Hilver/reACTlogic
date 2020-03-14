import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render} from '@testing-library/react'

import { useScroll } from '../../../../src/lib'
import App from '../../../../src/app/App'

describe("useScroll should", () => {
	test("returns default values on mounted", () => {
		const div = render(
			<App/>
		)
		 
		const { result } = renderHook(() => useScroll({
			element: {
				current: div.container 
			},
			throttleTime: 300
		}))

		expect(result.current).toMatchObject({
			x: 0,
			y: 0
		})
	})
})