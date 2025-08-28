import React, { createContext, useContext, useState, useEffect } from 'react';

// Контекст для переводов
const TranslationContext = createContext();

// Провайдер переводов
export const TranslationProvider = ({ children }) => {
	// Получаем язык из localStorage или устанавливаем по умолчанию 'en'
	const [language, setLanguage] = useState(() => {
		return localStorage.getItem('language') || 'en';
	});

	// Сохраняем выбранный язык в localStorage
	useEffect(() => {
		localStorage.setItem('language', language);
	}, [language]);

	// Функция для смены языка
	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
	};

	const value = {
		language,
		changeLanguage,
	};

	return (
		<TranslationContext.Provider value={value}>
			{children}
		</TranslationContext.Provider>
	);
};

// Хук для использования контекста переводов
export const useTranslationContext = () => {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error('useTranslationContext must be used within a TranslationProvider');
	}
	return context;
};
