import './Career.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {useTranslation} from '../../hooks/useTranslation';
import {useTranslationContext} from '../../contexts/TranslationContext';
import {useState, useMemo, useEffect} from 'react';
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import Papa from "papaparse";


const Career = () => {
	const {t} = useTranslation();
	const {language} = useTranslationContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState({});

	const swiperRef = useRef(null);

	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		Papa.parse(
		"https://docs.google.com/spreadsheets/d/e/2PACX-1vQYiUxCKgujiZz_Iab0qpwVV9zkBvIUtVNWiSsOSa24ZijXP7zmWzYnw8OQn2_uh058toKYsKHyi7f6/pub?gid=0&single=true&output=csv",
		{
			download: true,
			header: true,
			complete: (results) => {
			const data = results.data.map(job => ({
				...job,
				responsibilities: job.responsibilities?.split(";").map(s => s.trim()).filter(Boolean) || [],
				requirements: job.requirements?.split(";").map(s => s.trim()).filter(Boolean) || [],
				offer: job.offer?.split(";").map(s => s.trim()).filter(Boolean) || [],
			}));
			setJobs(data);
			},
		}
		);
	}, []);

	const openModal = (jobIndex) => {
		setSelectedJob(jobIndex);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
		setShowForm(false);
		setFormData({name: '', email: '', message: ''});
		setErrors({});
	};

	const showContactForm = () => {
		setShowForm(true);

		setTimeout(() => {
			const formElement = document.querySelector('.career-modal__form');
			if (formElement) {
				formElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}, 100);
	};

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = t('career.modal.form.validation.required');
		}

		if (!formData.email.trim()) {
			newErrors.email = t('career.modal.form.validation.required');
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = language === 'ru' ? 'Введите корректный email' : 'Enter a valid email';
		}

		if (!formData.message.trim()) {
			newErrors.message = t('career.modal.form.validation.required');
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validateForm()) {
			const submitData = {
				...formData,
				jobTitle: jobs[selectedJob].title
			};

			console.log('Отправка формы:', submitData);

			// Здесь будет отправка на бэк
			// await sendJobApplication(submitData);

			// Показываем успешное сообщение
			emailjs.send(
				'service_eb2xlw6',
				'template_3dpm63d',
				submitData,
				'PTrS16Jds8P2uOYi9'
				)
				.then((result) => {
				console.log('Email успешно отправлен!', result.text);
				})
				.catch((error) => {
				console.error('Ошибка отправки:', error.text);
				});
			//alert('Заявка успешно отправлена!');

			// Закрываем форму
			setShowForm(false);
			setFormData({name: '', email: '', message: ''});
			setErrors({});
		}
	};


	const jobGroups = useMemo(() => {
		const groups = [];
		for (let i = 0; i < jobs.length; i += 5) {
			groups.push(jobs.slice(i, i + 5));
		}
		return groups;
	}, [jobs]);

	return (
		<>
			<section className="career" id="career">
				<div className="container">
					<div className="career__content">
						<h2 className="career__title">
							{t('career.title.part1')}
							<br/>
							<span className="accent-block accent-block--yellow">{t('career.title.part2')}</span>
						</h2>
						<Swiper
							modules={[Pagination, Autoplay]}
							spaceBetween={30}
							slidesPerView={1}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							className="career__swiper"
							onSwiper={(swiper) => {
								swiperRef.current = swiper;
							}}
						>
							{jobGroups.map((jobGroup, groupIndex) => (
								<SwiperSlide key={groupIndex} className="career-slide">
									<ul className="career-list">
										{jobGroup.map((job, jobIndex) => {
											const globalJobIndex = groupIndex * 5 + jobIndex;
											return (
												<li key={globalJobIndex} className="career-list__item">
													<div className="career-list__top" onClick={() => openModal(globalJobIndex)}>
														<h3 className="career-list__heading">{job.title}</h3>
														<button className="career-list__btn">
															<svg width="24" height="16" viewBox="0 0 24 16" fill="none"
															     xmlns="http://www.w3.org/2000/svg">
																<path d="M22.0002 8.00016L16 2M22.0002 8.00016L16 14.0003M22.0002 8.00016L1 8.00017"
																      stroke="inherit" strokeWidth="2"></path>
															</svg>
														</button>
													</div>
												</li>
											);
										})}
									</ul>
								</SwiperSlide>
							))}
						</Swiper>

					</div>
				</div>
			</section>

			{/* Модальное окно */}
			{isModalOpen && selectedJob !== null && (
				<>
					{/* Оверлэй */}
					<div className="career-modal-overlay" onClick={closeModal}></div>

					{/* Модальное окно */}
					<div className="career-modal">
						<div className="career-modal__header">
							<h3 className="career-modal__title">{jobs[selectedJob].title}</h3>
							<button className="career-modal__close" onClick={closeModal}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
									      strokeLinejoin="round"/>
								</svg>
							</button>
						</div>

						<div className="career-modal__content">
							<p className="career-modal__text" dangerouslySetInnerHTML={{__html: jobs[selectedJob].description}}></p>

							<div className="career-modal__block">
								<h4 className="career-modal__block-title">{t('career.responsibilities')}:</h4>
								<ul className="career-modal__list">
									{jobs[selectedJob].responsibilities.map((skill, index) => (
										<li key={index} className="career-modal__list-item" dangerouslySetInnerHTML={{__html: skill}}></li>
									))}
								</ul>
							</div>

							<div className="career-modal__block">
								<h4 className="career-modal__block-title">{t('career.requirements')}:</h4>
								<ul className="career-modal__list">
									{jobs[selectedJob].requirements.map((task, index) => (
										<li key={index} className="career-modal__list-item" dangerouslySetInnerHTML={{__html: task}}></li>
									))}
								</ul>
							</div>

							<div className="career-modal__block">
								<h4 className="career-modal__block-title">{t('career.offer')}:</h4>
								<ul className="career-modal__list">
									{jobs[selectedJob].offer.map((offer, index) => (
										<li key={index} className="career-modal__list-item" dangerouslySetInnerHTML={{__html: offer}}></li>
									))}
								</ul>
							</div>

							<p className="career-modal__text"
							   dangerouslySetInnerHTML={{__html: jobs[selectedJob].additionalText}}></p>

							<button className="accent-block accent-block--yellow career-modal__contact" onClick={showContactForm}>
								{t('career.contactBtn')}
							</button>

							{/* Форма для подачи заявки */}
							{showForm && (
								<form className="career-modal__form" onSubmit={handleSubmit}>
									<h4 className="career-modal__form-title">{t('career.modal.title')}</h4>

									<div className="career-modal__form-group">
										<label htmlFor="name"
										       className="career-modal__form-label">{t('career.modal.form.name.label')}</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder={t('career.modal.form.name.placeholder')}
											className={`career-modal__form-input ${errors.name ? 'error' : ''}`}
										/>
										{errors.name && <span className="career-modal__form-error">{errors.name}</span>}
									</div>

									<div className="career-modal__form-group">
										<label htmlFor="email"
										       className="career-modal__form-label">{t('career.modal.form.email.label')}</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder={t('career.modal.form.email.placeholder')}
											className={`career-modal__form-input ${errors.email ? 'error' : ''}`}
										/>
										{errors.email && <span className="career-modal__form-error">{errors.email}</span>}
									</div>

									<div className="career-modal__form-group">
										<label htmlFor="telegram"
										       className="career-modal__form-label">{t('career.modal.form.telegram.label')}</label>
										<input
											type="text"
											id="telegram"
											name="telegram"
											value={formData.telegram || ''}
											onChange={handleInputChange}
											placeholder={t('career.modal.form.telegram.placeholder')}
											className={`career-modal__form-input ${errors.telegram ? 'error' : ''}`}
										/>
										{errors.telegram && <span className="career-modal__form-error">{errors.telegram}</span>}
									</div>

									<div className="career-modal__form-group">
										<label htmlFor="message"
										       className="career-modal__form-label">{t('career.modal.form.message.label')}</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder={t('career.modal.form.message.placeholder')}
											className={`career-modal__form-textarea ${errors.message ? 'error' : ''}`}
										/>
										{errors.message && <span className="career-modal__form-error">{errors.message}</span>}
									</div>

									<button type="submit" className="accent-block accent-block--yellow career-modal__form-submit">
										{t('career.modal.form.submit')}
									</button>
								</form>
							)}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Career;