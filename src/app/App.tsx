import React, { useRef } from 'react'
import useRect from '../lib/Measurement/useRect'

const App = () => {
	const divRef = useRef()
	const {width, height} = useRect(divRef)

	return (
		<div ref={divRef}>
			<div>Hello World, width is: {width}</div>		
		</div>
	)
}

export default App