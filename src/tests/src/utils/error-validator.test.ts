/* eslint-disable @typescript-eslint/no-explicit-any */
import errorValidator from '../../../utils/error-validator'

describe('errorValidator should', () => {
	test('throws am error with specified message', () => {
		const err = (): any => errorValidator([true, 'That error has no type'])

		expect(err).toThrow(Error('That error has no type'))
	})
	test('return undefined if there is no error', () => {
		expect(errorValidator([false, 'This message should not appear at all'])).toBeUndefined()
	})
})