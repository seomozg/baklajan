import './Career.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {useTranslation} from '../../hooks/useTranslation';
import {useState, useMemo} from 'react';
import {useRef} from 'react';

const Career = () => {
	const {t} = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		telegram: '',
		message: ''
	});
	const [errors, setErrors] = useState({});

	const swiperRef = useRef(null);

	const openModal = (jobIndex) => {
		setSelectedJob(jobIndex);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
		setShowForm(false);
		setFormData({name: '', email: '', telegram: '', message: ''});
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
		// Убираем ошибку при начале ввода
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
			newErrors.name = 'Имя обязательно для заполнения';
		}
		
		if (!formData.email.trim()) {
			newErrors.email = 'Email обязателен для заполнения';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Введите корректный email';
		}
		
		if (!formData.telegram.trim()) {
			newErrors.telegram = 'Telegram обязателен для заполнения';
		}
		
		if (!formData.message.trim()) {
			newErrors.message = 'Сообщение обязательно для заполнения';
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
			alert('Заявка успешно отправлена!');
			
			// Закрываем форму
			setShowForm(false);
			setFormData({name: '', email: '', telegram: '', message: ''});
			setErrors({});
		}
	};

	const jobs = [
		{
			title: "Content Producer",
			description: "The <b>Secret Traffic</b> team is expanding and seeking an experienced <b>Content Producer</b> to join us remotely. As we continue to grow and strengthen our operations, we are looking for strong candidates eager to take on projects and develop with us.",
			responsibilities: [
				"🎬 Producing video content for YouTube and social media",
				"📝 Preparing briefs for designers and video editors",
				"⚡️ Organizing and overseeing all stages of production",
				"🤝 Coordinating with actors and contractors",
				"📊 Analyzing social media metrics and working with analytics tools",
				"📂 Maintaining documentation in Google Docs",
				"💡 Taking part in the entire process — from idea to final result"
			],
			requirements: [
				"🎥 1+ year of experience as a producer / content producer",
				"📱 Strong understanding of digital and social media",
				"📌 Ability to organize workflows and communication",
				"🖥 Proficiency in Google Docs and basic analytics",
				"🌍 English level — B1 or higher",
				"📑 Portfolio and case studies required"
			],
			offer: [
				"📍 Format: Full-time, remote",
				"⏰ 5/2 schedule, 10:00–18:00 (Moscow time)",
				"🚀 Opportunity to bring your ideas to life and participate in full-cycle production",
				"🔥 Work on exciting digital & social media projects",
				"🤗 A team that values initiative and engagement"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Content Manager 👨‍💻",
			description: "The <b>Secret Traffic</b> team is expanding and looking for an experienced <b>Content Manager</b> to work remotely. We're growing and strengthening our team, so we're seeking strong candidates ready to dive into projects and grow with us.",
			responsibilities: [
				"📱 Manage and grow Telegram channels",
				"✍️ Create, edit, and publish engaging content tailored to different regions",
				"🤖 Work with Telegram bots (Fleep bot, Controllet bot, Junction bot)",
				"📊 Monitor performance and ensure timely posting",
				"🤝 Collaborate with the team to align content with strategy"
			],
			requirements: [
				"✔️ 1+ year of experience managing Telegram channels",
				"🌍 Experience working with regions: Europe, India, Latin America",
				"🤖 Skills in working with Telegram bots (Fleep bot, Controllet bot, Junction bot)",
				"🌐 English level B2 or higher",
				"🚀 Willingness to grow, earn, and work in a team",
				"☑️ Experience with Captions, CapCut, ChatGPT, ElevenLabs is a plus",
				"☑️ Portfolio or samples of previous work is a plus"
			],
			offer: [
				"✅ Friendly team with onboarding and adaptation to our workflow",
				"⏰ Remote schedule (10:00–19:00)",
				"📈 Opportunity for salary growth based on performance",
				"💰 Fixed salary + bonuses"
			],
			additionalText: "<b>Important:</b> A short test assignment will be part of the final selection stage. <br/><br/> 🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Checker | QCC 👨‍💻",
			description: "The <b>Secret Traffic</b> team is looking for an experienced <b>Checker</b> to join us remotely.",
			responsibilities: [
				"☑️ Monitor the quality of processing in the sales department",
				"☑️ Record and document violations in processing",
				"☑️ Provide timely reporting",
				"☑️ Respond quickly to messages and tasks during the workday"
			],
			requirements: [
				"✔️ Solid background in the vertical and understanding of industry specifics",
				"✔️ Responsibility, goal orientation, and result-driven mindset",
				"✔️ English level B2 or higher",
				"✔️ Motivation to earn, grow professionally, and work as part of a team"
			],
			offer: [
				"✅ Fully remote format (schedule: 08:00–21:00, 6/1)",
				"✅ Fixed salary (discussed after the interview)",
				"✅ Stable payments in USDT once a month (2 payments in the first month for a smooth start)",
				"✅ Automated processes via CRM",
				"✅ Work in a team with established infrastructure"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Retention Manager / Handler of Scheme Traffic for Repeat Deposits (RD) 👨‍💻",
			description: "The <b>Secret Traffic</b> team is looking for an experienced <b>RD traffic handler</b> for repeat deposits.",
			responsibilities: [
				"🔄 Handle incoming traffic (RD) and work with repeat deposits",
				"⚡️ Ensure high-quality processing of traffic within the Binary Options vertical",
				"🤝 Collaborate with the team to maximize conversion and retention rates",
				"📊 Maintain reporting and provide timely updates",
				"🚀 React quickly to daily tasks and workflow requirements"
			],
			requirements: [
				"✔️ 6+ months of relevant work experience (Vertical: Binary Options, GEOs: Tier 1–2)",
				"✔️ Strong background in the vertical and deep understanding of industry specifics",
				"✔️ Skills in effective interaction with incoming traffic (RD)",
				"✔️ Responsibility, determination, and result-oriented mindset",
				"✔️ English level B2 or higher",
				"✔️ Motivation to earn, grow professionally, and work in a team"
			],
			offer: [
				"✅ Fully remote format (schedule: 08:00–21:00, 6/1)",
				"✅ Income: fixed salary + commission from sales",
				"✅ Payments: once a month (twice in the first month for a smooth start)",
				"☑️ Opportunities for career and financial growth for proactive and ambitious managers"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Creative Designer for Ad Content Editing 🎨",
			description: "A company specializing in <b>Search Arbitrage</b> is looking for a <b>Creative Designer</b> to join the team. We are seeking a specialist who understands dynamics and trends and can quickly adapt creatives to fit specific tasks.",
			responsibilities: [
				"✂️ Edit advertising videos according to briefs (TOR)",
				"🎨 Create static ad creatives",
				"⚡️ Produce 5–15 creatives per day (depending on complexity; most are basic frame edits)",
				"🔥 Work with modern tools and current trends",
				"💡 Contribute creative ideas to improve ad performance"
			],
			requirements: [
				"✔️ Strong proficiency in CapCut and Canva",
				"✔️ Basic to advanced skills in Photoshop, After Effects, Premiere Pro",
				"✔️ Knowledge and ability to use AI tools (avatars, graphics, voiceover)",
				"✔️ Awareness of current design trends, strong sense of dynamics, and visual literacy",
				"✔️ Creative mindset and initiative"
			],
			offer: [
				"🏠 Remote work, flexible schedule",
				"💰 Salary starting from $800 (negotiable based on experience and portfolio)",
				"🎯 Engaging tasks with the opportunity to influence final results"
			],
			additionalText: "👉 Examples of creatives you'll be working with can be found here: <a href='https://drive.google.com/drive/folders/1GAbftF0vQHNi6iTUzY1t4fv4e-N15Cr0?usp=sharing&utm_source=chatgpt.com' target='_blank'>Google Drive link</a><br/><br/>⚡️ <b>Important:</b> Please attach your portfolio (video + static creatives) when applying.<br/><br/>🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Search Arbitrage Media Buyer (FB & TikTok) 📊",
			description: "We are a team of experienced media buyers with expertise in <b>Search Arbitrage</b>, Leadgen, Finance, and more. Right now, we're looking for a strong <b>Media Buyer (FB + TikTok, Search Arbitrage)</b> who knows how to build profitable ad campaigns and scale them to consistent results.",
			responsibilities: [
				"🔄 Full-cycle ad buying in FB and TikTok: from launch to scaling",
				"🎯 Testing and selecting creatives (together with designers and using spy tools)",
				"🔍 Researching and validating new offer hypotheses",
				"📈 Analyzing and optimizing campaigns against KPIs",
				"💰 Scaling successful campaigns to maximize profit"
			],
			requirements: [
				"✔️ 1+ year of hands-on experience with FB and TikTok",
				"✔️ Solid understanding of how to run profitable campaigns in the Search Arbitrage vertical",
				"✔️ Confident with analytics and key metrics (CTR, CR, ROI, profit)",
				"✔️ Comfortable testing and cutting non-performing creatives",
				"✔️ Team player willing to share insights and knowledge"
			],
			offer: [
				"💰 Base rate from $500 + % of profit (real earnings $4,000+ with strong results)",
				"🏠 Remote work with a flexible schedule",
				"🏝️ Relocation opportunity to Cyprus",
				"🛠️ Full support with creatives, trackers, and tools",
				"🕵️ Access to premium spy tool accounts",
				"🎁 Bonuses for exceeding KPIs",
				"📈 Career growth opportunities (both horizontal & vertical)"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Google Ads Media Buyer (Leadgen) 🎯",
			description: "We are a team of media buyers with years of expertise in <b>Search Arbitrage</b>, Leadgen, Finance, and more. We work with large budgets, bring ad campaigns to stable profitability, and help our specialists grow quickly in both earnings and expertise.",
			responsibilities: [
				"🔄 Full-cycle ad buying in Google Ads: from launch to scaling",
				"🎨 Testing and selecting creatives (together with designers and using spy tools)",
				"🔍 Researching and validating new offer hypotheses",
				"📈 Analyzing and optimizing campaigns against KPIs",
				"💰 Scaling profitable campaigns for maximum results"
			],
			requirements: [
				"✔️ 1+ year of hands-on experience with Google Ads",
				"✔️ Experience managing large ad budgets",
				"✔️ Understanding of Search Arbitrage and Leadgen verticals",
				"✔️ Strong analytical skills and confidence in key metrics (CTR, CR, ROI, Profit)",
				"✔️ Willingness to test, cut unprofitable campaigns, and find new working hypotheses",
				"✔️ Teamwork skills and readiness to share insights"
			],
			offer: [
				"💰 Base rate from $1000 + % of profit (average earnings for successful buyers — from $4000+)",
				"🏠 Remote work with flexible hours",
				"🏝️ Relocation opportunity to Cyprus",
				"🛠️ Full support: creatives, trackers, access to necessary tools",
				"👥 Work in a team of professionals who know how to help media buyers scale their income fast",
				"🕵️ Access to premium spy tool accounts",
				"🎁 Bonuses for exceeding KPIs",
				"📈 Career growth opportunities (both horizontal & vertical)"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		},
		{
			title: "Facebook Media Buyer (Leadgen) 📘",
			description: "We are a group of media buying professionals with extensive experience in <b>Search Arbitrage</b>, Leadgen, and Finance. Currently, we're looking for an experienced <b>Facebook Media Buyer (Leadgen)</b> capable of creating profitable campaigns and driving them to consistent performance.",
			responsibilities: [
				"🔄 Full-cycle ad buying in Facebook: from launch to scaling",
				"🎨 Testing and selecting creatives (with designers and using spy tools)",
				"🔍 Researching and validating new offer hypotheses",
				"📈 Analyzing and optimizing campaigns against KPIs",
				"💰 Scaling profitable campaigns for maximum growth"
			],
			requirements: [
				"✔️ 1+ year of hands-on experience with Facebook Ads",
				"✔️ Solid understanding of running profitable campaigns in Search Arbitrage and Leadgen",
				"✔️ Confident with analytics and key metrics (CTR, CR, ROI, Profit)",
				"✔️ Comfortable testing and cutting non-performing creatives",
				"✔️ Team player willing to share insights and work collaboratively"
			],
			offer: [
				"💰 Base rate from $1000 + % of profit (real earnings $4000+ with strong results)",
				"🏠 Remote work with flexible hours",
				"🏝️ Relocation opportunity to Cyprus",
				"🛠️ Full support with creatives, trackers, and necessary tools",
				"👥 Work in an experienced team that helps media buyers scale income quickly",
				"🕵️ Access to premium spy tool accounts",
				"🎁 Bonuses for exceeding KPIs",
				"📈 Career growth opportunities (horizontal & vertical)"
			],
			additionalText: "🚀 <b>Want to join us?</b><br/>Send your application below — let's discuss the details!"
		}
	];

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
								<h4 className="career-modal__block-title">{t('career.responsibilities')}:</h4>
								<ul className="career-modal__list">
									{jobs[selectedJob].offer.map((offer, index) => (
										<li key={index} className="career-modal__list-item" dangerouslySetInnerHTML={{__html: offer}}></li>
									))}
								</ul>
							</div>

							<p className="career-modal__text" dangerouslySetInnerHTML={{__html: jobs[selectedJob].additionalText}}></p>

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
											value={formData.telegram}
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