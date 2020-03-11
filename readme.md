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