import React, { useState, useEffect } from 'react'

interface ICollections {
	data: any[],
	search: string | number,
	type?: string
}

const useSearch = (collections: ICollections) => {
	const { data, search, type } = collections
	const [result, setResult] = useState(data)

	useEffect(() => {
		if(type) {
			setResult(data.filter((el: any) => el[type].indexOf(search) !== -1))
		} else {
			setResult(data.filter(el => el.toString().indexOf(search.toString()) !== -1))
		}
	}, [search])

	return result
}

export default useSearch