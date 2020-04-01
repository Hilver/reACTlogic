<div style="text-align: center;">
	<img src="./media/reACTlogic_logo.png" />
</div>

reACTLogic is a library of React's components logic which is based on the modern and cool React approach - **hooks!**

## Motivation

Since React Hooks brings us an easy and maintainlable way to share and reuse component's logic between the entirely app, I decided to write a core of basic logic which can be used by all React developers. This is a truly concept of **"create once, use everywhere"**!

## Install

```
npm install reactlogic
```

## API

### **useSlider(changeSpeed?: number, indexLimit: number)**

#### changeSpeed

Type: `number`

A number of miliseconds between each slide change.

#### indexLimit

Type: `number`

A number of slider length.

#### **Usage**
```
const slider = useSlider(changeSpeed?: number(ms), indexLimit: number)

slider.isPlaying: boolean
slider.setPlaying: function: (boolean) => isPlaying
slider.togglePlaying: function: () => !isPlaying
slider.nextSlide: function: () => index + 1
slider.prevSlide: function: () => index - 1
slider.index: number
```

### **useRect(refEl: HTMLElement)**

#### RefEl

Type: `HTML Element`

An element of which rect is counted. Properties describing the overall border-box in pixels. Properties other than `width` and `height` are relative to the top-left o the viewport. (More info here.)[https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect]

#### **Usage**

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

### **useScroll**
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

### **useInput**
```
const input = useInput()

input[0]: string
input[1]: function: e => setValue(e.target.value)
}
```

### **useSearch**
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