import React, { useState, ChangeEvent } from 'react'

type E = ChangeEvent<HTMLInputElement>
type F = (e: E) => void

const useCheckbox = (): [boolean, F] => {
	const [value, setValue] = useState(false)

	const handleValue = (e: E): void => {
		const value = e.currentTarget.checked
		setValue(value)
	}

	return [value, handleValue]
}

export default useCheckbox