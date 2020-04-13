import React, { useState, ChangeEvent } from 'react'

interface IInputOptions {
	isCheckbox: boolean;
}

type S = (string | number | boolean)
type E = ChangeEvent<any>
type F = (e: E) => void;

const useInput = (props?: IInputOptions): [S, F] => {
	const [value, setValue] = useState(null)
	const { isCheckbox } = props || {}

	const handleValue = (e: E): void => {
		const value = isCheckbox === undefined || !isCheckbox ? e.currentTarget.value : e.currentTarget.checked
		setValue(value)
	}

	return [value, handleValue]
}

export default useInput