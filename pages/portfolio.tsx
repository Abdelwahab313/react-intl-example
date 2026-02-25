import { useTranslations } from 'next-intl';
import Navbar from '../components/Navbar';

const clients = [
	{ nameKey: 'client1Name', year: 2019, emoji: '🚀' },
	{ nameKey: 'client2Name', year: 2020, emoji: '🌿' },
	{ nameKey: 'client3Name', year: 2021, emoji: '🤖' },
	{ nameKey: 'client4Name', year: 2022, emoji: '💊' },
	{ nameKey: 'client5Name', year: 2023, emoji: '📊' },
];

const testimonials = [
	{ quoteKey: 'testimonial1Quote', name: 'Sarah Chen', role: 'CTO', company: 'Nexora Systems' },
	{ quoteKey: 'testimonial2Quote', name: 'Miguel Rodriguez', role: 'VP Engineering', company: 'Verdant Labs' },
	{ quoteKey: 'testimonial3Quote', name: 'Aisha Patel', role: 'Product Director', company: 'Pinnacle AI' },
	{ quoteKey: 'testimonial4Quote', name: 'James O\'Brien', role: 'CEO', company: 'Cobalt Health' },
];

export default function Portfolio() {
	const t = useTranslations('PortfolioPage');

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

					<section className="mb-12">
						<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
							{t('clientsHeading')}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{clients.map((client) => (
								<div
									key={client.nameKey}
									className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
								>
									<div className="text-4xl mb-3">{client.emoji}</div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
										{t(client.nameKey)}
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										{t('partnerSince', {
											clientName: t(client.nameKey),
											year: client.year,
										})}
									</p>
								</div>
							))}
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
							{t('testimonialsHeading')}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{testimonials.map((item) => (
								<div
									key={item.quoteKey}
									className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
								>
									<p className="text-gray-600 dark:text-gray-300 italic mb-4">
										&ldquo;{t(item.quoteKey)}&rdquo;
									</p>
									<div>
										<p className="font-semibold text-gray-900 dark:text-white">
											{item.name}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											{t('roleAtCompany', {
												role: item.role,
												company: item.company,
											})}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
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
