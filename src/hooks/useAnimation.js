import { useState, useEffect, useRef } from 'react';

const useAnimation = (options = {}) => {
	const {
		threshold = 0.1,
		rootMargin = '0px',
		triggerOnce = true,
		delay = 0,
		staggerDelay = 100
	} = options;

	const [isVisible, setIsVisible] = useState(false);
	const [hasTriggered, setHasTriggered] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
					setTimeout(() => {
						setIsVisible(true);
						setHasTriggered(true);
					}, delay);
				} else if (!triggerOnce && !entry.isIntersecting) {
					setIsVisible(false);
				}
			},
			{
				threshold,
				rootMargin
			}
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [threshold, rootMargin, triggerOnce, hasTriggered, delay]);

	// Для стagger анимаций
	const getStaggerDelay = (index) => delay + (index * staggerDelay);

	return {
		ref: elementRef,
		isVisible,
		hasTriggered,
		getStaggerDelay
	};
};

export default useAnimation;
