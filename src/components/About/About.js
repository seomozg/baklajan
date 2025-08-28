import './About.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { useTranslation } from '../../hooks/useTranslation';
import useAnimation from '../../hooks/useAnimation';

const About = () => {
	const { t } = useTranslation();
	
	const CreativeIcon = () => (
		<svg className="about__icon" viewBox="0 0 60 60" fill="none">
			<path d="M10 50L30 10L50 50H10Z" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1"/>
			<path d="M20 35L40 35" stroke="currentColor" strokeWidth="2"/>
			<circle cx="30" cy="25" r="3" fill="currentColor"/>
			<path d="M15 45L45 45" stroke="currentColor" strokeWidth="2"/>
		</svg>
	);

	const AutomationIcon = () => (
		<svg className="about__icon" viewBox="0 0 60 60" fill="none">
			<rect x="5" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
			<rect x="40" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
			<rect x="22.5" y="30" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
			<path d="M20 22.5L22.5 22.5" stroke="currentColor" strokeWidth="2"/>
			<path d="M37.5 22.5L40 22.5" stroke="currentColor" strokeWidth="2"/>
			<path d="M30 30L30 22.5" stroke="currentColor" strokeWidth="2"/>
			<circle cx="12.5" cy="22.5" r="2" fill="currentColor"/>
			<circle cx="47.5" cy="22.5" r="2" fill="currentColor"/>
		</svg>
	);

	const ITIcon = () => (
		<svg className="about__icon" viewBox="0 0 60 60" fill="none">
			<path d="M10 15L30 5L50 15V45L30 55L10 45V15Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
			<path d="M10 15L30 25L50 15" stroke="currentColor" strokeWidth="2"/>
			<path d="M30 25V55" stroke="currentColor" strokeWidth="2"/>
			<path d="M20 20L25 25L20 30" stroke="currentColor" strokeWidth="2" fill="none"/>
			<path d="M40 20L35 25L40 30" stroke="currentColor" strokeWidth="2" fill="none"/>
			<circle cx="30" cy="40" r="3" fill="currentColor"/>
		</svg>
	);

	const titleAnimation = useAnimation({ delay: 100 });
	const swiperAnimation = useAnimation({ delay: 300 });

	return (
		<section className="about">
			<div className="container">
				<div className="about__content">
					<h2 
						ref={titleAnimation.ref}
						className={`about__title about-title ${titleAnimation.isVisible ? 'visible' : ''}`}
					>
						<span className="accent-block accent-block--yellow">{t('about.title.part1')}</span>
						<br/>
						{t('about.title.part2')}
					</h2>

					<div 
						ref={swiperAnimation.ref}
						className={`about__swiper-container about-swiper ${swiperAnimation.isVisible ? 'visible' : ''}`}
					>
						<Swiper
							modules={[Autoplay, EffectCards]}
							spaceBetween={30}
							slidesPerView={1}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							effect="cards"
							cardsEffect={{
								slideShadows: false,
								transformEl: '.about__item-inner',
							}}
							className="about__swiper"
						>
							<SwiperSlide>
								<div className="about__item">
									<div className="about__item-inner">
										<CreativeIcon />
										<h3 className="about__heading">{t('about.cards.creative.title')}</h3>
										<p className="about__text">{t('about.cards.creative.text')}</p>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="about__item">
									<div className="about__item-inner">
										<AutomationIcon />
										<h3 className="about__heading">{t('about.cards.automation.title')}</h3>
										<p className="about__text">{t('about.cards.automation.text')}</p>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="about__item">
									<div className="about__item-inner">
										<ITIcon />
										<h3 className="about__heading">{t('about.cards.itEcosystem.title')}</h3>
										<p className="about__text">{t('about.cards.itEcosystem.text')}</p>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;