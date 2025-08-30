import React, { useEffect } from 'react';
import './Hero.scss';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import { useTranslation } from '../../hooks/useTranslation';
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

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__block">
					<div className="hero__content">
						<h1 className="accent-block accent-block--yellow hero__title hero-title">
							{t('hero.title')}
						</h1>
						
						<h2 className="hero__text hero-subtitle">
							{t('hero.subtitle')}
							{hasTranslation('hero.subtitleBreak') && (
								<>
									<br/>
									{t('hero.subtitleBreak')}
								</>
							)}
						</h2>
					</div>
					
					<div className="hero__img hero-image">
						<img src="/images/hero-back_2.png" alt=""/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero;