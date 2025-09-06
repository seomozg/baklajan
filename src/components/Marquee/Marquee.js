import './Marquee.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useMarqueeHeight from "../../hooks/useMarqueeHeight";

const Marquee = ({ content = "trafficWorldwide", direction = "left" }) => {
	const { marqueeRef } = useMarqueeHeight();
	const { t } = useTranslation();
	
	const MarqueeContent = () => {
		const text = t(`marquee.${content}`);
		const isObject = typeof text === 'object';

		const renderContent = () => {
			if (isObject) {
				return (
					<>
						<span className="marquee__text">{text.part1}</span>
						<img 
							src="/images/logos/logo-colorful-mob.png" 
							alt="Baklajan" 
							className="marquee__logo"
						/>
						<span className="marquee__text">{text.part2}</span>
						<img 
							src="/images/logos/logo-colorful-mob.png" 
							alt="Baklajan" 
							className="marquee__logo"
						/>
					</>
				);
			}
			return (
				<>
					<span className="marquee__text">{text}</span>
					<img 
						src="/images/logos/logo-colorful-mob.png" 
						alt="Baklajan" 
						className="marquee__logo"
					/>
				</>
			);
		};

		return (
			<>
				{renderContent()}
				{renderContent()}
				{renderContent()}
				{renderContent()}
				{renderContent()}
			</>
		);
	};

	return (
		<div 
			ref={marqueeRef}
			className="marquee"
		>
			<div className={`marquee__track marquee__track--${direction}`}>
				<div className="marquee__content">
					<MarqueeContent />
				</div>
				<div className="marquee__content">
					<MarqueeContent />
				</div>
			</div>
		</div>
	)
}

export default Marquee;
