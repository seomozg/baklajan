import React, { useEffect } from 'react';
import './Hero.scss';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import { useTranslation } from '../../hooks/useTranslation';
import useAnimation from '../../hooks/useAnimation';

const Hero = () => {
	const { headerHeight } = useHeaderHeight();
	const { t, language } = useTranslation();
	
	// Проверяем, существует ли перевод
	const hasTranslation = (key) => {
		try {
			const translation = t(key);
			return translation && translation !== key;
		} catch {
			return false;
		}
	};

	// Дополнительно устанавливаем CSS переменную для этого компонента
	useEffect(() => {
		document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
	}, [headerHeight]);

	const titleAnimation = useAnimation({ delay: 200 });
	const subtitleAnimation = useAnimation({ delay: 600 });
	const imageAnimation = useAnimation({ delay: 400 });

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__block">
					<div className="hero__content">
						<h1 
							ref={titleAnimation.ref}
							className={`accent-block accent-block--yellow hero__title hero-title ${titleAnimation.isVisible ? 'visible' : ''}`}
						>
							{t('hero.title')}
						</h1>
						
						<h2 
							ref={subtitleAnimation.ref}
							className={`hero__text hero-subtitle ${subtitleAnimation.isVisible ? 'visible' : ''}`}
						>
							{t('hero.subtitle')}
							{hasTranslation('hero.subtitleBreak') && (
								<>
									<br/>
									{t('hero.subtitleBreak')}
								</>
							)}
						</h2>
					</div>
					
					<div 
						ref={imageAnimation.ref}
						className={`hero__img hero-image ${imageAnimation.isVisible ? 'visible' : ''}`}
					>
						<img src="/images/hero-back.png" alt=""/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero;