import React, { useState, FormEvent } from 'react'

const useInput = () => {
	const [value, setValue] = useState(null)

	const handleValue = (e: FormEvent<HTMLInputElement>)  => {
		setValue(e.currentTarget.value)
	}

	return [value, handleValue]
}

export default useInput