import React, {useState, useEffect, useRef } from 'react'

interface ISliderResult {
	isPlaying: boolean;
	setPlaying: (isPlaying: boolean) => void;
	togglePlaying: () => void;
	nextSlide: () => void;
	prevSlide: () => void;
	index: number;
}

const useSlider = (indexLimit: number, changeSpeed = 2000): ISliderResult => {
	if (indexLimit === undefined || indexLimit === null) throw new Error('Index Limit is required!')
	if (typeof indexLimit !== 'number' || indexLimit < 1) throw new Error('Index Limit should be a number greater than zero!')
	if (changeSpeed < 0) throw new Error('ChangeSpeed should be greater than zero!')
	const [isPlaying, setPlaying] = useState(false)
	const [index, setIndex] = useState(0)

	const indexRef = useRef(null)

	useEffect(() =>
		(): void => clearInterval(indexRef.current)
	,[])

	const togglePlaying = (): void => {
		if (!isPlaying) {
			indexRef.current = setInterval(() => {
				setIndex(index => (index + 1) % indexLimit)
			}, changeSpeed)
		} else {
			clearInterval(indexRef.current)
		}
		setPlaying(!isPlaying)
	}

	const nextSlide = (): void => {
		setIndex(index => (index + 1) % indexLimit)
	}

	const prevSlide = (): void => {
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