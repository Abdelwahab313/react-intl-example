import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const languages = [
	{ code: 'en', name: 'English' },
	{ code: 'es', name: 'Spanish' },
	{ code: 'fr', name: 'French' },
];

export default function LanguageSwitcher() {
	const t = useTranslations('LanguageSwitcher');
	const router = useRouter();

	const handleLanguageChange = (locale: string) => {
		router.push(router.asPath, router.asPath, { locale });
	};

	return (
		<div className="mb-6">
			<label
				htmlFor="language-select"
				className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			>
				{t('selectLanguage')}
			</label>
			<select
				id="language-select"
				value={router.locale}
				onChange={(e) => handleLanguageChange(e.target.value)}
				className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
			>
				{languages.map((lang) => (
					<option key={lang.code} value={lang.code}>
						{lang.name}
					</option>
				))}
			</select>
		</div>
	);
}
