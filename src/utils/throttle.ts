/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */
const throttle = (func: Function, limit: number): Function => {
	let inThrottle: boolean
	return function(): void {
		const args = arguments
		const context = this
		if (!inThrottle) {
			func.apply(context, args)
			inThrottle = true
			setTimeout(() => inThrottle = false, limit)
		}
	}
}

export default throttle