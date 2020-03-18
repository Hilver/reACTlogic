![](./media/reACTlogic_logo.png)

reACTLogic as name say is React logic library based on hooks. 

## API

**useSlider**
```
const slider = useSlider(changeSpeed: number, indexLimit: number)

slider.isPlaying: boolean
slider.setPlaying: function: (boolean) => isPlaying
slider.togglePlaying: function: () => !isPlaying
slider.nextSlide = () => index + 1
slider.prevSlide = () => index - 1
slider.index: number
```

**useRect**
```
const App = () => {
	const divRef = useRef()
	const {
		width, 
		height,
		top,
		bottom,
		right,
		left,
		x,
		y
		} = useRect(divRef)

	return (
		<div ref={divRef}>
			<div>Width is: {width}</div>		
		</div>
	)
}

/*
// 
/ @width: number
/ @height: number
/ @top: number
/ @bottom: number
/ @right: number
/ @left: number
/ @x: number
/ @y: number
//
*/
```

**useScroll**
```
/*
// 
/ @element?: HTMLElement | Passing ref element, if none the default value is taken (window) 
/ @throttleTime?: number | Throttle event in ms, if none the default value is taken (20)
/ @targetElement?: HTMLElement | Passing ref of element which should be targeted
//
*/

const App = () => {
	const divRef = useRef()
	const targetEl = useRef()
	const { 
		x, 
		y,
		isTop,
		isBottom,
		isTargetReached
	} = useScroll({
			element: divRef, 
			throttleTime: 50,
			targetElement: targetEl
	})

	return (
		<div ref={divRef}>
			<div ref={divRef}>Scroll Y is: {y}</div>		
		</div>
	)
}

/*
// 
/ @x: number | Horizontal position of provided element
/ @y: number | Vertical position of provided element
/ @isTop: boolean | returns true if scroll position of provided element is at the top
/ @isBottom: boolean | returns true if scroll position of provided element is at the bottom
/ @isTargetReached: boolean | returns true if target element is reached
//
*/
```