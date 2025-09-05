import React, {useState, useEffect} from 'react';
import './Header.scss';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import {useTranslation} from '../../hooks/useTranslation';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const {headerRef} = useHeaderHeight();
	const {t, language, changeLanguage} = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<header ref={headerRef} className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
			<div className="container">
				<div className="header__content">
					<a className="header__logo" href="/">
						<picture>
							<source media="(min-width: 768px)" srcSet="/images/logos/logo-colorful.png"/>
							<source media="(max-width: 767px)" srcSet="/images/logos/logo-colorful-mob.png"/>

							<img src="/images/logos/logo-colorful-mob.png" alt="Logo"/>
						</picture>
					</a>

					<nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
						<button
							className={`header__burger header__burger--close`}
							onClick={toggleMobileMenu}
						>
							<span></span>
							<span></span>
						</button>
						<ul className="header__nav-list">
							<li className="header__nav-item">
								<a
									className="header__nav-link"
									onClick={() => scrollToSection('about')}
								>
									{t('header.navigation.about')}
								</a>
							</li>
							<li className="header__nav-item">
								<a
									className="header__nav-link"
									onClick={() => scrollToSection('join')}
								>
									{t('header.navigation.joinUs')}
								</a>
							</li>
							<li className="header__nav-item">
								<a
									className="header__nav-link"
									onClick={() => scrollToSection('career')}
								>
									{t('header.navigation.career')}
								</a>
							</li>
							<li className="header__nav-item">
								<a
									className="header__nav-link"
									onClick={() => scrollToSection('contacts')}
								>
									{t('header.navigation.contacts')}
								</a>
							</li>
						</ul>
					</nav>

					<div className="header__actions">
						<button
							className={` ${language === 'en' ? 'accent-block accent-block--pink active' : ''}`}
							onClick={() => changeLanguage('en')}
						>
							EN
						</button>
						<button
							className={`${language === 'ru' ? 'accent-block accent-block--pink active' : ''}`}
							onClick={() => changeLanguage('ru')}
						>
							RU
						</button>
					</div>

					<button
						className={`header__burger ${isMobileMenuOpen ? 'header__burger--open' : ''}`}
						onClick={toggleMobileMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
