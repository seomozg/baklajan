import './Statistics.scss';
import { useTranslation } from '../../hooks/useTranslation';
const Statistics = () => {
	const { t } = useTranslation();
	
	return (
		<section className="statistics" id="about">
			<div className="container">
				<div className="statistics__content">
					<h2 className="statistics__title stats-title">
						<span className="accent-block accent-block--pink">{t('statistics.title.part1')}</span>
						<span className="accent-block accent-block--yellow">{t('statistics.title.part2')}</span>
					</h2>

					<div className="statistics__grid">
						<div className="statistics__item stats-item">
							<div className="statistics__number">{t('statistics.items.years.number')}</div>
							<div className="statistics__description">{t('statistics.items.years.description')}</div>
						</div>
						<div className="statistics__item stats-item">
							<div className="statistics__number">{t('statistics.items.verticals.number')}</div>
							<div className="statistics__description">{t('statistics.items.verticals.description')}</div>
						</div>
						<div className="statistics__item stats-item">
							<div className="statistics__number">{t('statistics.items.traffic.number')}</div>
							<div className="statistics__description">{t('statistics.items.traffic.description')}</div>
						</div>
						<div className="statistics__item stats-item">
							<div className="statistics__number">{t('statistics.items.pros.number')}</div>
							<div className="statistics__description">{t('statistics.items.pros.description')}</div>
						</div>
					</div>

					<p className="statistics__text stats-text">
						{t('statistics.text')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Statistics;