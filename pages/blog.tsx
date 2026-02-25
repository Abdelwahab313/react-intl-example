import { useTranslations, useFormatter } from 'next-intl';
import Navbar from '../components/Navbar';

const articles = [
	{ titleKey: 'article1Title', excerptKey: 'article1Excerpt', date: new Date(2025, 0, 15) },
	{ titleKey: 'article2Title', excerptKey: 'article2Excerpt', date: new Date(2025, 1, 3) },
	{ titleKey: 'article3Title', excerptKey: 'article3Excerpt', date: new Date(2025, 2, 21) },
	{ titleKey: 'article4Title', excerptKey: 'article4Excerpt', date: new Date(2025, 3, 8) },
	{ titleKey: 'article5Title', excerptKey: 'article5Excerpt', date: new Date(2025, 4, 17) },
	{ titleKey: 'article6Title', excerptKey: 'article6Excerpt', date: new Date(2025, 5, 2) },
	{ titleKey: 'article7Title', excerptKey: 'article7Excerpt', date: new Date(2025, 6, 12) },
	{ titleKey: 'article8Title', excerptKey: 'article8Excerpt', date: new Date(2025, 7, 25) },
];

export default function Blog() {
	const t = useTranslations('BlogPage');
	const format = useFormatter();

	return (
		<div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<Navbar />

				<main>
					<div className="mb-8">
						<h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
							{t('title')}
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							{t('subtitle')}
						</p>
					</div>

					<div className="space-y-0">
						{articles.map((article, index) => {
							const formattedDate = format.dateTime(article.date, {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							});

							return (
								<div
									key={article.titleKey}
									className={`bg-white dark:bg-gray-800 p-6 ${
										index === 0 ? 'rounded-t-lg' : ''
									} ${
										index === articles.length - 1 ? 'rounded-b-lg' : ''
									} ${
										index < articles.length - 1
											? 'border-b border-gray-200 dark:border-gray-700'
											: ''
									}`}
								>
									<a href="#" className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
										{t(article.titleKey)}
									</a>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
										{t('publishedOn', { date: formattedDate })}
									</p>
									<p className="text-gray-600 dark:text-gray-300 mt-2">
										{t(article.excerptKey)}
									</p>
									<a href="#" className="text-blue-500 hover:text-blue-700 text-sm mt-2 inline-block">
										{t('readMore')}
									</a>
								</div>
							);
						})}
					</div>
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
