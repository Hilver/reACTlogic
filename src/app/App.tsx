import React, { useRef } from 'react'
import useResolution from '../lib/Measurement/useRect'

const App = () => {
	const divRef = useRef()
	const {width, height} = useResolution(divRef)

	return (
		<div ref={divRef}>
			<div>Hello World, width is: {width}</div>		
		</div>
	)
}

export default App