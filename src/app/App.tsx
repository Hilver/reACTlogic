import React, {useState, useRef, useCallback } from 'react'
import { useRect, useScroll, useInput, useSearch } from '../lib/'

const searchData = [
	{
		name: 'Big Wheenie',
		artist: 'Eminem'
	},
	{
		name: 'Lucky',
		artist: 'Britney Spears'
	},
	{
		name: 'Cambiodolore',
		artist: 'Natalia Oreiro'
	},
	{
		name: '12 groszy',
		artist: 'Kazik'
	},
	{
		name: 'Mama',
		artist: 'Freddie Mercury'
	},
	{
		name: 'Yellow submarine',
		artist: 'The Beatles'
	}
]

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
	const [selectValue, setSelectValue] = useInput()
	const searchResult = useSearch({data: searchData, search: inputValue, type: selectValue})

	return (
		<div ref={divRef} style={{height: "3500px"}}>
			<div data-testid="scrollDiv" ref={scrollRef} style={{height: "500px", overflow: 'scroll'}}>
				<div style={{height: "3500px"}}>
					Width is: {width}
					<br/>
					<input data-testid='textInput' type='text' onChange={setInputValue}/>
					<select onChange={setSelectValue}>
						<option>name</option>
						<option>artist</option>
					</select>
					<br />
					Input value is: <span data-testid="textFromInput">{inputValue}</span>
					<br />					
					<ul>
					{searchResult.map((el, index) =>( 
						<li key={index}>
							Artist: {el.artist}
							<br />
							Name: {el.name}									
						</li>))}
					</ul>
						
				


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