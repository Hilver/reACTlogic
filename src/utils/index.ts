import throttleFn from './throttle'
import debounceFn from './debounce'
import errorValidatorFn from './error-validator'

export const throttle = throttleFn
export const errorValidator = errorValidatorFn
export const debounce = debounceFn

export default {
	throttle,
	debounce,
	errorValidator
}