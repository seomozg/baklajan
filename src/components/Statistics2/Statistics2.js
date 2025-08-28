import './Statistics2.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useAnimation from '../../hooks/useAnimation';

const Statistics2 = () => {
	const { t } = useTranslation();
	
	const titleAnimation = useAnimation({ delay: 100 });
	const textAnimation = useAnimation({ delay: 700 });
	
	// Анимации для каждого элемента статистики
	const item1Animation = useAnimation({ delay: 200 });
	const item2Animation = useAnimation({ delay: 350 });
	const item3Animation = useAnimation({ delay: 500 });
	const item4Animation = useAnimation({ delay: 650 });
	
	return (
		<section className="statistics2">
			<div className="container">
				<div className="statistics2__content">
					<h2 
						ref={titleAnimation.ref}
						className={`statistics2__title stats-title ${titleAnimation.isVisible ? 'visible' : ''}`}
					>
						<span className="accent-block accent-block--pink">{t('statistics.title.part1')}</span>
						<span className="accent-block accent-block--yellow">{t('statistics.title.part2')}</span>
					</h2>

					<div className="statistics2__grid">
						<div 
							ref={item1Animation.ref}
							className={`statistics2__item stats-item ${item1Animation.isVisible ? 'visible' : ''}`}
						>
							<div className="statistics2__number">{t('statistics.items.years.number')}</div>
							<div className="statistics2__description">{t('statistics.items.years.description')}</div>
						</div>
						<div 
							ref={item2Animation.ref}
							className={`statistics2__item stats-item ${item2Animation.isVisible ? 'visible' : ''}`}
						>
							<div className="statistics2__number">{t('statistics.items.verticals.number')}</div>
							<div className="statistics2__description">{t('statistics.items.verticals.description')}</div>
						</div>
						<div 
							ref={item3Animation.ref}
							className={`statistics2__item stats-item ${item3Animation.isVisible ? 'visible' : ''}`}
						>
							<div className="statistics2__number">{t('statistics.items.traffic.number')}</div>
							<div className="statistics2__description">{t('statistics.items.traffic.description')}</div>
						</div>
						<div 
							ref={item4Animation.ref}
							className={`statistics2__item stats-item ${item4Animation.isVisible ? 'visible' : ''}`}
						>
							<div className="statistics2__number">{t('statistics.items.pros.number')}</div>
							<div className="statistics2__description">{t('statistics.items.pros.description')}</div>
						</div>
					</div>

					<p 
						ref={textAnimation.ref}
						className={`statistics2__text stats-text ${textAnimation.isVisible ? 'visible' : ''}`}
					>
						{t('statistics.text')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Statistics2;