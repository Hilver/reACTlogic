import React, { useState, ChangeEvent } from 'react'

type S = (string | number)
type E = ChangeEvent<HTMLInputElement | HTMLSelectElement>
type F = (e: E) => void;

const useInput = (): [S, F] => {
	const [value, setValue] = useState(null)

	const handleValue = (e: E): void => {
		setValue(e.currentTarget.value)
	}

	return [value, handleValue]
}

export default useInput