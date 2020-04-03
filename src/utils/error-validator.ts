// interface IOptions {
// 	input: string;
// 	isRequired: boolean;
// 	type: string;
// 	error: string;
// }

// const comparativeOperators = ['!==', '===', '!=', '==']
// const specialComparativeOperators = ['&&', '||']

// const typeCompilator = (type) => {
// 	let constructor = []
// 	let operator
// 	let result = []
// 	specialComparativeOperators.forEach(o => {
// 		if (type.indexOf(o) !== -1) {
// 			type.split(o).forEach(el => constructor.push(el))
// 			operator = o
// 		}
// 	})

// 	for(condition of constructor[1].split(',')) {
// 		result.push(constructor[0] + condition)
// 	}
	
// 	return result
// } 

// const errorValidator = (options: IOptions) => {
// 	const {input, isRequired, type, error} = options
// 	if (isRequired && (input === undefined || input === null)) throw Error(`${input} is required!`)

// 	if(input !== undefined) {

// 	}
// }



// if ( refEl !== undefined) {
// 	if () {
// 		throw Error('Element which can be scrolled should be a div, table or td!')
// 	}
// }


// {
// 	input: element,
// 	isRequired: boolean,
// 	conditions: element.nodeName&&[`!== 'div'`,`!=='table'`, `!== td`], => element.nodeName !== 'div' && element.nodeName !== 'table' && element.nodeName !== 'td'
// 	error: string

// } []