import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import { useInput } from '../../../../lib'

interface IProps {
	type: string;
}

const BaseInputComponent = (props: IProps): React.ReactElement => {
	const [value, setValue] = useInput()

	return (
		<div>
			<input data-testid='testInput' type={props.type} onChange={setValue} />
			<div data-testid='testedDiv'>{value}</div>
		</div>
	)
}

describe('useInput should', () => {
	test('returns empty value as init state', () => {
		const { getByTestId } = render(
			<BaseInputComponent type='text'/>
		)

		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('')
	})
	test('returns provided value on text type input', () => {
		const { getByTestId } = render(
			<BaseInputComponent type='text'/>
		)

		fireEvent.change(getByTestId('testInput'), {target: {value: 'abc'}})

		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('abc')
	})
	test('returns provided value on number type input', () => {
		const { getByTestId } = render(
			<BaseInputComponent type='number'/>
		)

		fireEvent.change(getByTestId('testInput'), {target: {value: 123}})

		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('123')
	})
	test('returns empty value when string is passed in number type input', () => {
		const { getByTestId } = render(
			<BaseInputComponent type='number'/>
		)

		fireEvent.change(getByTestId('testInput'), {target: {value: 'test'}})

		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('')
	})
	test('returns provided value on radio button input type', () => {
		const RadiobuttonInputComponent = (): React.ReactElement => {
			const [value, setValue] = useInput()
			return (
				<div>
					<input data-testid='radioButton1' name='radioButtonTest' type='radio' onChange={setValue} value='test1' />
					<input data-testid='radioButton2' name='radioButtonTest' type='radio' onChange={setValue} value='test2' />
					<div data-testid='testedDiv'>{value}</div>
				</div>
			)
		}

		const { getByTestId } = render(
			<RadiobuttonInputComponent />
		)

		fireEvent.click(getByTestId('radioButton2'))

		const testingDiv = getByTestId('testedDiv')

		expect(testingDiv.innerHTML).toBe('test2')
	})
	test('returns provided value on checkbox input type', () => {
		const CheckboxInputComponent = (): React.ReactElement => {
			const [value, setValue] = useInput({isCheckbox: true})
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