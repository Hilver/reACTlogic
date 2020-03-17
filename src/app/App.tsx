import React, {useState, useRef, useCallback } from 'react'
import { useRect } from '../lib/'
import { useScroll } from '../lib/'

const App = () => {
	const divRef = useRef()
	const scrollRef = useRef()
	const {width, height} = useRect(divRef)	
	const {x , y, isTop, isBottom } = useScroll({element: scrollRef, throttleTime: 20})
	const windowScrollPosition = useScroll()
	console.log(windowScrollPosition)
	return (
		<div ref={divRef} style={{height: "3500px"}}>
			<div data-testid="scrollDiv" ref={scrollRef} style={{height: "500px", overflow: 'scroll'}}>
				<div style={{height: "3500px"}}>Width is: {width}</div>
			</div>
			<div style={{position: "fixed"}}>
				Scroll position Y on window is: {windowScrollPosition.y}
				<br/>
				Scroll is at the top: {windowScrollPosition.isTop ? 'true' : 'false'}
				<br/>
				Scroll is at the bottom: {windowScrollPosition.isBottom ? 'true' : 'false'}
				<br/>
				Scroll position Y in div is: {y}
				<br/>
				Scroll is at the bottom: {isBottom ? 'true' : 'false'}
				<br/>
				Scroll is at the top: {isTop ? 'true' : 'false'}
			</div>		
		</div>
	)
}

export default App