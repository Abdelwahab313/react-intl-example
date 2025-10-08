import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function About() {
	const t = useTranslations('Navigation');
	const tAbout = useTranslations('AboutPage');
	const router = useRouter();

	return (
		<div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<nav className="mb-8 flex justify-between items-center">
					<div>
						<Link href="/" className="text-blue-500 hover:text-blue-700 mr-4">
							{t('home')}
						</Link>
						<span className="text-gray-500">{t('about')}</span>
					</div>
					<div className="w-48">
						<LanguageSwitcher />
					</div>
				</nav>

				<main className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
					<h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						{tAbout('title')}
					</h1>
					<p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
						{tAbout('description')}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
						{tAbout('currentLocale', { locale: router.locale || 'en' })}
					</p>
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
						{tAbout('button')}
					</button>
				</main>
			</div>
		</div>
	);
}

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../messages/${context.locale}.json`)).default,
		},
	};
}
