/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
const throttle = (func: Function, limit: number): Function => {
	let inThrottle: boolean
	return function(args: any): void {
		const context = this
		if (!inThrottle) {
			func.apply(context, [...args])
			inThrottle = true
			setTimeout(() => inThrottle = false, limit)
		}
	}
}

export default throttle