import { useState } from 'react';
import './Contacts.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useAnimation from '../../hooks/useAnimation';

const Contacts = () => {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		text: ''
	});

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'unset';
		setFormData({ name: '', email: '', text: '' });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Здесь можно добавить логику отправки формы
		console.log('Form submitted:', formData);
		closeModal();
	};

	const item1Animation = useAnimation({ delay: 100 });
	const item2Animation = useAnimation({ delay: 300 });

	return (
		<>
			<section className="contacts" id="join">
				<div className="container">
					<div className="contacts__content">
						<div 
							ref={item1Animation.ref}
							className={`contacts__item contact-item ${item1Animation.isVisible ? 'visible' : ''}`}
						>
							<h2 className="contacts__title">{t('contacts.advertisers.title')}</h2>
							<p className="contacts__text">
								{t('contacts.advertisers.text')}
							</p>
							<button onClick={openModal}>{t('contacts.advertisers.button')}</button>
						</div>

						<div 
							ref={item2Animation.ref}
							className={`contacts__item contact-item ${item2Animation.isVisible ? 'visible' : ''}`}
						>
							<h2 className="contacts__title">{t('contacts.mediaBuyers.title')}</h2>
							<p className="contacts__text">
								{t('contacts.mediaBuyers.text')}
							</p>
							<button onClick={openModal}>{t('contacts.mediaBuyers.button')}</button>
						</div>
					</div>
				</div>
			</section>

			{/* Модальное окно */}
			{isModalOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close" onClick={closeModal}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</button>
						
						<h2 className="modal-title">{t('modal.title')}</h2>
						
						<form className="modal-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">{t('modal.form.name.label')}</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									placeholder={t('modal.form.name.placeholder')}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">{t('modal.form.email.label')}</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									placeholder={t('modal.form.email.placeholder')}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="text">{t('modal.form.message.label')}</label>
								<textarea
									id="text"
									name="text"
									value={formData.text}
									onChange={handleInputChange}
									required
									placeholder={t('modal.form.message.placeholder')}
									rows="4"
								/>
							</div>

							<button type="submit" className="submit-button">
								{t('modal.form.submit')}
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default Contacts;