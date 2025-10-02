import {useState} from 'react';
import './Contacts.scss';
import {useTranslation} from '../../hooks/useTranslation';
import emailjs from 'emailjs-com';

const Contacts = () => {
	const {t} = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		telegram: '',
		text: ''
	});

	const [errors, setErrors] = useState({});

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'unset';
		setFormData({name: '', email: '', phone: '', telegram: '', text: ''});
		setErrors({});
	};

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const validateForm = () => {
		const newErrors = {};
		const errorMessage = t('modal.form.validation.required');

		if (!formData.name.trim()) {
			newErrors.name = errorMessage;
		}

		if (!formData.email.trim()) {
			newErrors.email = errorMessage;
		}

		if (!formData.phone.trim()) {
			newErrors.phone = errorMessage;
		}

		if (!formData.telegram.trim()) {
			newErrors.telegram = errorMessage;
		}

		if (!formData.text.trim()) {
			newErrors.text = errorMessage;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		emailjs.send(
			'service_eb2xlw6',
			'template_iycjnjp',
			formData,
			'PTrS16Jds8P2uOYi9'
			)
			.then((result) => {
			console.log('Email успешно отправлен!', result.text);
			})
			.catch((error) => {
			console.error('Ошибка отправки:', error.text);
			});
		if (validateForm()) {

			console.log('Form submitted:', formData);
			closeModal();
		}
	};

	return (
		<>
			<section className="contacts" id="join">
				<div className="container">
					<div className="contacts__content">
						<h2 className="contacts__heading">
							{t('contacts.title.part1')}
							<br/>
							<span className="accent-block accent-block--pink">{t('contacts.title.part2')}</span>
						</h2>
						{t('contacts.cards').map((card, index) => (
							<div className="contacts__item contact-item" key={index}>
								<h2 className="contacts__title">{card.title}</h2>
								<p className="contacts__text">
									{card.text}
								</p>
								<button className="accent-block accent-block--yellow contacts__btn"
								        onClick={openModal}>{card.button}</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{isModalOpen && (
				<div className="modal__overlay" onClick={closeModal}>
					<div className="modal__content" onClick={(e) => e.stopPropagation()}>
						<button className="modal__close" onClick={closeModal}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</button>

						<h2 className="modal__title">{t('modal.title')}</h2>

						<form className="modal-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">{t('modal.form.name.label')}</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder={t('modal.form.name.placeholder')}
								/>
								{errors.name && <span className="form-error">{errors.name}</span>}
							</div>

							<div className="form-group">
								<label htmlFor="email">{t('modal.form.email.label')}</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder={t('modal.form.email.placeholder')}
								/>
								{errors.email && <span className="form-error">{errors.email}</span>}
							</div>

							<div className="form-group">
								<label htmlFor="phone">{t('modal.form.phone.label')}</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									placeholder={t('modal.form.phone.placeholder')}
								/>
								{errors.phone && <span className="form-error">{errors.phone}</span>}
							</div>

							<div className="form-group">
								<label htmlFor="telegram">{t('modal.form.telegram.label')}</label>
								<input
									type="text"
									id="telegram"
									name="telegram"
									value={formData.telegram}
									onChange={handleInputChange}
									placeholder={t('modal.form.telegram.placeholder')}
								/>
								{errors.telegram && <span className="form-error">{errors.telegram}</span>}
							</div>

							<div className="form-group">
								<label htmlFor="text">{t('modal.form.message.label')}</label>
								<textarea
									id="text"
									name="text"
									value={formData.text}
									onChange={handleInputChange}
									placeholder={t('modal.form.message.placeholder')}
									rows="4"
								/>
								{errors.text && <span className="form-error">{errors.text}</span>}
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