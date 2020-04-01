import React, { useState, useEffect } from 'react'


type inputData = {
    [key: string]: string | number;
}


interface ICollections {
	data: Array<string | number | inputData>;
	search: string | number;
	type?: keyof inputData | string;
}

const toStr = (value: number | string): string => value.toString()

const useSearch = (collections: ICollections): (string | number | inputData)[] => {
	const { data, search, type } = collections
	const [result, setResult] = useState(data)

	useEffect(() => {
		if (data.length) {
			if (type) {
				setResult(data.filter((el: inputData) => toStr(el[type]).indexOf(toStr(search)) !== -1))
			} else if (typeof data[0] !== 'object') {
				setResult(data.filter((el: string | number) => toStr(el).indexOf(toStr(search)) !== -1))
			}
		}
	}, [search, type, data])

	return result
}

export default useSearch