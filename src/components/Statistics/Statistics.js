import './Statistics.scss';
import {useTranslation} from '../../hooks/useTranslation';

const Statistics = () => {
	const {t} = useTranslation();

	return (
		<section className="statistics" id="about">
			<div className="container">
				<div className="statistics__content">
					<h2 className="section-title statistics__title">
						<span className="accent-block accent-block--pink">{t('statistics.title.part1')}</span>
						<span className="accent-block accent-block--yellow">{t('statistics.title.part2')}</span>
					</h2>

					<div className="statistics__grid">
						{t('statistics.items').map((item, index) => (
							<div className="statistics__item stats-item" key={index}>
								<div className="statistics__number">{item.number}</div>
								<div className="statistics__description">{item.description}</div>
							</div>
						))}
					</div>

					<p className="section-paragraph statistics__text">
						{t('statistics.text')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Statistics;