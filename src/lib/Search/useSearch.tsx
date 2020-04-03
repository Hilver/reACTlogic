import React, { useState, useEffect } from 'react'


type inputData = {
    [key: string]: string | number;
}


interface ICollections {
	data: Array<string | number | inputData>;
	search: string | number;
	type?: keyof inputData;
}

const toStr = (value: number | string): string => value.toString()

const useSearch = (collections: ICollections): (string | number | inputData)[] => {
	const { data, search, type } = collections
	const [result, setResult] = useState(data)

	if (data.some(val => typeof val === 'object')) {
		if (!(data.every(val => typeof val === 'object'))) throw new Error('Don\'t mix data object with others types!')
		if (type === undefined) throw new Error('Missing \'type\' option!')
		if (!(data.some(obj => Object.keys(obj).filter(key => key === type).length > 0))) {
			throw new Error('Invalid \'type\' property. Type should match at least one of searched object key!')
		}
	}

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