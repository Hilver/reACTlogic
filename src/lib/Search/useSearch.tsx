import React, { useState, useEffect } from 'react'

interface IData {
	inputData: Array<string | number | object>,
	search: string | number,
	type: string
}

const useSearch = (data: IData) => {
	const { inputData, search, type } = data
	const [result, setResult] = useState(inputData)

	useEffect(() => {
		if(type) {
			setResult(inputData.filter((el: any) => el[type].indexOf(search) !== 1))
		} else {
			setResult(inputData.filter(el => el.toString().indexOf(search.toString()) !== -1))
		}
	}, [search])

	return result
}

export default useSearch