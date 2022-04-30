import { useEffect, useState, useRef, MutableRefObject } from 'react'

interface PropsIn {
	distanceToIntersect?: number
	containerToIntersect?: MutableRefObject<undefined>
}
interface PropsOut {
	intersecting: boolean
	intersectedElementRef: MutableRefObject<undefined>
}
interface IntersectionObserverOptions {
	root?: any
	rootMargin?: string
	threshold?: number | number[]
}

const useIntersectionObserver = (props: PropsIn): PropsOut => {
	const { distanceToIntersect = 100, containerToIntersect = null } = props
	const [intersecting, setIntersecting] = useState(false)
	const intersectedElementRef = useRef()

	useEffect(() => {
		const onIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			const intersectedElement = entries[0]
			if (intersectedElement.isIntersecting) {
				setIntersecting(true)
				observer.disconnect()
			}
		}

		const observerOptions: IntersectionObserverOptions = {
			root: containerToIntersect ? containerToIntersect.current : containerToIntersect,
			rootMargin: `${distanceToIntersect}px`
		}
		const observer = new IntersectionObserver(onIntersect, observerOptions)

		return () => observer.disconnect()
	}, [])

	return { intersecting, intersectedElementRef } as const
}

export default useIntersectionObserver
