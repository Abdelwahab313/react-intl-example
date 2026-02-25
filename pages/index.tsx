import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Home() {
	const t = useTranslations('HomePage');
	const router = useRouter();

	return (
		<div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<Navbar />

				<main className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
					<h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						{t('title')}
					</h1>
					<p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
						{t('description')}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
						{t('currentLocale', { locale: router.locale || 'en' })}
					</p>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						{t('button')}
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
