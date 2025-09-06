import './About.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, EffectCards} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import {useTranslation} from '../../hooks/useTranslation';
import {useRef} from 'react';

const About = () => {
	const swiperRef = useRef(null);
	const {t} = useTranslation();

	return (
		<section className="about">
			<div className="container">
				<div className="about__content">
					<h2 className="section-title about__title">
						<span className="accent-block accent-block--yellow">{t('about.title.part1')}</span>
						<br/>
						{t('about.title.part2')}
					</h2>

					<div className="about__swiper-wrapper">
						<Swiper
							modules={[Pagination, Autoplay, EffectCards]}
							spaceBetween={30}
							slidesPerView={1}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							effect="cards"
							cardsEffect={{
								slideShadows: false,
								transformEl: '.about__item-inner',
							}}
							className="about__swiper"
							onSwiper={(swiper) => {
								swiperRef.current = swiper;
							}}
						>
							{t('about.cards').map((card, index) => (
								<SwiperSlide key={index}>
									<div
										className="about__item"
										onClick={() => swiperRef.current?.slideNext()}
									>
										<div className="about__item-inner">
											<div className="about__icon" dangerouslySetInnerHTML={{__html: card.icon}}></div>
											<h3 className="about__heading">{card.title}</h3>
											<p className="about__text">{card.text}</p>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					<p className="section-paragraph about__paragraph">
						{t('about.text')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default About;