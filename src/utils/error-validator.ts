type Args = [boolean, string][];


const errorValidator = (...args: Args): Error| void => {
	args.forEach(e => {
		if (e[0]) throw new Error(e[1])
	})
}

export default errorValidator