import React, { useState, useEffect } from 'react'

import errorValidator from '../../utils/error-validator'

type inputData = {
    [key: string]: string | number;
}


interface ICollections {
	data: Array<string | number | inputData>;
	search: string | number;
	type?: keyof inputData;
	caseSensitive?: boolean;
}

const toStr = (value: number | string,
	caseSensitive: boolean): string => caseSensitive ?
	value.toString() :
	value.toString().toLowerCase()

const useSearch = (collections: ICollections): (string | number | inputData)[] => {
	const { data, search, type } = collections
	const caseSensitive = collections.caseSensitive === undefined ? true : collections.caseSensitive
	const [result, setResult] = useState(data)

	if (data.some(val => typeof val === 'object')) {
		errorValidator(
			[!(data.every(val => typeof val === 'object')), 'Don\'t mix data object with others types!'],
			[type === undefined, 'Missing \'type\' option!'],
			[!(data.some(obj => Object.keys(obj).filter(key => key === type).length > 0)), 'Invalid \'type\' property. Type should match at least one of searched object key!']
		)
	}

	useEffect(() => {
		if (data.length) {
			if (type) {
				setResult(data.filter((el: inputData) => toStr(el[type], caseSensitive).indexOf(toStr(search, caseSensitive)) !== -1))
			} else if (typeof data[0] !== 'object') {
				setResult(data.filter((el: string | number) => toStr(el, caseSensitive).indexOf(toStr(search, caseSensitive)) !== -1))
			}
		}
	}, [search, type, data, caseSensitive])

	return result
}

export default useSearch