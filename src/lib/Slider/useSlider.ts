import React, {useState, useEffect, useRef } from 'react'

const useSlider = (changeSpeed: number, indexLimit: number) => {
	const [isPlaying, setPlaying] = useState(false)
	const [index, setIndex] = useState(0)

	const indexRef = useRef(null)

	useEffect(() =>
		() => clearInterval(indexRef.current)
	,[])

	const togglePlaying = () => {
		if(!isPlaying) {
			indexRef.current = setInterval(() => {
				setIndex(index => (index + 1) % indexLimit)
			}, changeSpeed)
		} else {
			clearInterval(indexRef.current) 
		}
		setPlaying(!isPlaying)
	}

	const nextSlide = () => {
		setIndex(index => (index + 1) % indexLimit)
	}

	const prevSlide = () => {
		setIndex(index => index === 0 ? indexLimit - 1 : (index - 1) % indexLimit)
	}

	return {
		isPlaying,
		setPlaying,
		togglePlaying,
		nextSlide,
		prevSlide,
		index
	}

}

export default useSlider