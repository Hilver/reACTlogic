import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import useCheckbox from '../../../../lib/Input/useCheckbox'

describe('useCheckbox should', () => {
	test('returns true if checkbox is checked', () => {
		const CheckboxInputComponent = (): React.ReactElement => {
			const [value, setValue] = useCheckbox()
			return (
				<div>
					<input data-testid='checkboxInput' type='checkbox' onChange={setValue} />
					<div data-testid='testedDiv'>{value === true ? 'checked' : 'not checked'}</div>
				</div>
			)
		}

		const { getByTestId } = render(
			<CheckboxInputComponent />
		)

		const checkbox = getByTestId('checkboxInput')
		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('not checked')

		fireEvent.click(checkbox)

		expect(testingDiv.innerHTML).toBe('checked')
	})
})