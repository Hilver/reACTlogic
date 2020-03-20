import React, {useState, useRef, useCallback } from 'react'
import { useRect, useScroll, useInput } from '../lib/'

const App = () => {
	const divRef = useRef()
	const scrollRef = useRef()
	const targetToReach = useRef()
	const {width, height} = useRect(divRef)	
	const {x , y, isTop, isBottom, isTargetReached } = useScroll({
		element: scrollRef,
		throttleTime: 20,
		targetElement: targetToReach
	})
	const windowScrollPosition = useScroll()
	const [inputValue, setInputValue] = useInput()

	return (
		<div ref={divRef} style={{height: "3500px"}}>
			<div data-testid="scrollDiv" ref={scrollRef} style={{height: "500px", overflow: 'scroll'}}>
				<div style={{height: "3500px"}}>
					Width is: {width}
					<br/>
					<input data-testid='textInput' type='text' onChange={setInputValue}/>
					<br />
					Input value is: <span data-testid="textFromInput">dupa {inputValue}</span>
					<div ref={targetToReach} style={{position: "relative", top: "900px"}}>Target Element</div>
				</div>
			</div>
			<div style={{position: "fixed"}}>
				Scroll position Y on window is: {windowScrollPosition.y}
				<br/>
				Window scroll is at the bottom: {windowScrollPosition.isBottom ? 'true' : 'false'}, top: {windowScrollPosition.isTop ? 'true' : 'false'} 
				<br/>
				Scroll position Y in div is: {y}
				<br/>
				Inner div scroll is at the bottom: {isBottom ? 'true' : 'false'}, top: {isTop ? 'true' : 'false'}  
				<br />
				Is target in div reached: {isTargetReached ? 'true' : 'false'}
			</div>		
		</div>
	)
}

export default App