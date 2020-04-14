<div style="text-align: center;">
	<img src="https://github.com/Hilver/reACTlogic/raw/master/media/reACTlogic_logo.png" />
</div>

![](https://badgen.net/github/last-commit/Hilver/reACTlogic) ![](https://badgen.net/npm/v/reactlogic-hooks-library) ![](https://badgen.net/github/license/Hilver/reACTlogic)

reACTLogic is a library of React's components logic which is based on the modern and cool React approach - **hooks!**

## Table of contents

1. [Motivation](#motivation)
2. [Installation](#installation)
3. [API](#api)
	- [useCheckbox](#usecheckbox)
	- [useInput](#useinput)
	- [useRect](#userectrefel)
	- [useScroll](#usescrollelement-debounce-delaytime-targetelement)
	- [useSearch](#usesearchdata-search-type-casesensitive)
	- [useSlider](#usesliderindexlimit-changespeed)
4. [Contributor list](#contributors)

## Motivation

Since React Hooks brings us an easy and maintainlable way to share and reuse component's logic between the entirely app it became clear that custom hooks are the future of React. This library is a truly concept of **"create once, use everywhere"**!

## Installation

```
npm install reactlogic-hooks-library
```

## API

This documentation with additional code snippets is also available [here](https://hilver.github.io/reactlogic-docs/)

### useCheckbox

Returns boolean value from `checkbox` input.

#### **Usage**
```
const input = useCheckbox()

input[0]: boolean
input[1]: function: e => setValue(e.target.checked)
}
```

### useInput

Returns provided value as string.

#### **Usage**
```
const input = useInput()

input[0]: string
input[1]: function: e => setValue(e.target.value)
}
```

### useScroll({element?, debounce?, delayTime?, targetElement?})

#### element

**Type: `RefObject<HTMLElement>`**

**Default: `window`**

A React ref element of which scroll event will be measured.

#### debounce

**Type: `Boolean`**

If `true` then scroll event will use `debounce` function as delay, otherwise `throttle` function will be set. If this option is ommited, `throttle` is set as default.

#### delayTime

**Type: `number`**

**Default: `0 ms`**

A number of milliseconds for delay function.

#### **Usage**

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

### useSearch({data, search, type?, caseSensitive?})

#### data

**Type: `Array<string | number | object>`**

An `array` of data that will be filtered for a match.

#### search

**Type: `string | number`**

A `string` or `number` to be searched for.

#### type

**Type: `string<keyof data>`**

When input data is an `array` of `objects`, you have to specify which property include to search for. It should be `string` which is key of specified data objects.

#### caseSensitive

Type: `boolean`

An addition property which distinguish queries by case sensitive. Default value is set to **true**.

#### **Usage**

```
const search = useSearch({
	data: array, 
	search: string,
	type: string
})

search.value: array
```

### useSlider(indexLimit, changeSpeed?)

#### indexLimit

**Type: `number`**

A number of slider length.

#### changeSpeed

**Type: `number`**

**Default: `2000 ms`**

A number of miliseconds between each slide change.

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

### useRect(refEl?)

#### RefEl

**Type: `RefObject<HTMLElement>`**

**Default: `window`**

A React ref element of which rect is counted. Properties describing the overall border-box in pixels. Properties other than `width` and `height` are relative to the top-left o the viewport. [More info here.](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

#### **Usage**

```
const rect = useRect(divRef: ReactRefElement)

rect.width: number
rect.height: number
rec.top: number
rect.bottom: number
rect.right: number
rect.left: number
```

## Contributors
<!-- CONTRIBUTORS LIST -->
<table cellspacing="0" cellpadding="0">
	<tbody>
		<tr>
			<td align="center">
				<a href="https://github.com/Hilver">
					<img src="https://avatars3.githubusercontent.com/u/12917005?v=3" width="100px;" alt=""/>
					<br />
					<sub><b>Paweł Pęczkowski</b></sub>
				</a>
			</td>
		</tr>
	</tbody>
</table>