const debounce = (fn: Function, ms: number): Function => {
	let flag = true
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (...args: any): void => {
		if (flag) {
			setTimeout(() => {
				flag = true
				fn(...args)
			}, ms)
		}
		flag = false
	}
}

export default debounce