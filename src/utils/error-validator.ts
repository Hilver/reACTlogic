// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Args = [boolean, string, errorType?][];

type errorType = 'error' | 'typeError' | 'rangeError' | 'referenceError'

const errors = {
	error: (s: string): Error => {
		throw new Error(s)
	},
	typeError: (s: string): Error => {
		throw new TypeError(s)
	},
	rangeError: (s: string): Error => {
		throw new RangeError(s)
	},
	referenceError: (s: string): Error => {
		throw new ReferenceError(s)
	},
}

const errorValidator = (...args: Args): Error | void => {
	args.forEach(e => {
		const err = e[2] === undefined ? 'error' : e[2]
		if (e[0]) errors[err](e[1])
	})
}

export default errorValidator