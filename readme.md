<div style="text-align: center;">
	<img src="./media/reACTlogic_logo.png" />
</div>

reACTLogic is a library of React's components logic which is based on the modern and cool React approach - **hooks!**

## Motivation

Since React Hooks brings us an easy and maintainlable way to share and reuse component's logic between the entirely app, I decided to write a core of basic logic which can be used by all React developers. This is a truly concept of **"create once, use everywhere"**!

## API

**useSlider**
```
const slider = useSlider(changeSpeed?: number(ms), indexLimit: number)

slider.isPlaying: boolean
slider.setPlaying: function: (boolean) => isPlaying
slider.togglePlaying: function: () => !isPlaying
slider.nextSlide: function: () => index + 1
slider.prevSlide: function: () => index - 1
slider.index: number
```

**useRect**
```
const rect = useRect(divRef: ReactRefElement)

rect.width: number
rect.height: number
rec.top: number
rect.bottom: number
rect.right: number
rect.left: number
rect.x: number
rect.y: number
```

**useScroll**
```
const scroll = useScroll({
	element?: ReactRefElement, 
	throttleTime?: number(ms),
	targetElement?: ReactRefElement
})

scroll.x: number
scroll.y: number
scroll.isTop: boolean
scroll.isBottom: boolean
scroll.isTargetReached: boolean
```

**useInput**
```
const input = useInput()

input[0]: string
input[1]: function: e => setValue(e.target.value)
}
```

**useSearch**
/*
// 
/ @data: array | array of searching elements 
/ @search: string | search input
/ @type?: string | type of searching properties in object
//
*/

```
const search = useSearch({
	data: array, 
	search: string
})

search.value: array
```