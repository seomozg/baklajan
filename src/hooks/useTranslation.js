import { useTranslationContext } from '../contexts/TranslationContext';
import translations from '../translations';

// Хук для работы с переводами
export const useTranslation = () => {
	const { language, changeLanguage } = useTranslationContext();

	// Функция для получения перевода по пути
	const t = (path) => {
		const keys = path.split('.');
		let value = translations[language];

		for (const key of keys) {
			if (value && typeof value === 'object') {
				value = value[key];
			} else {
				// Если перевод не найден, возвращаем ключ
				console.warn(`Translation not found for path: ${path} in language: ${language}`);
				return path;
			}
		}

		return value || path;
	};

	return {
		t,
		language,
		changeLanguage
	};
};
