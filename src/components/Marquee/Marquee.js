import './Marquee.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useAnimation from '../../hooks/useAnimation';

const Marquee = ({ content = "trafficWorldwide" }) => {
	const { t } = useTranslation();
	
	const MarqueeContent = () => (
		<>
			<span className="marquee__text">{t(`marquee.${content}`)}</span>
			<img 
				src="/images/logos/logo-colorful-mob.png" 
				alt="Baklajan" 
				className="marquee__logo"
			/>
			<span className="marquee__text">{t(`marquee.${content}`)}</span>
			<img 
				src="/images/logos/logo-colorful-mob.png" 
				alt="Baklajan" 
				className="marquee__logo"
			/>
			<span className="marquee__text">{t(`marquee.${content}`)}</span>
			<img 
				src="/images/logos/logo-colorful-mob.png" 
				alt="Baklajan" 
				className="marquee__logo"
			/>
			<span className="marquee__text">{t(`marquee.${content}`)}</span>
			<img 
				src="/images/logos/logo-colorful-mob.png" 
				alt="Baklajan" 
				className="marquee__logo"
			/>
			<span className="marquee__text">{t(`marquee.${content}`)}</span>
			<img 
				src="/images/logos/logo-colorful-mob.png" 
				alt="Baklajan" 
				className="marquee__logo"
			/>
		</>
	);

	const marqueeAnimation = useAnimation({ delay: 0, threshold: 0.3 });

	return (
		<div 
			ref={marqueeAnimation.ref}
			className={`marquee marquee-animated ${marqueeAnimation.isVisible ? 'visible' : ''}`}
		>
			<div className="marquee__track">
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
