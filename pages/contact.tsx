import { useTranslations } from 'next-intl';
import Navbar from '../components/Navbar';

export default function Contact() {
	const t = useTranslations('ContactPage');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

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

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="md:col-span-2">
							<div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
								<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
									{t('formHeading')}
								</h2>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="fullName"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											{t('fullName')}
										</label>
										<input
											type="text"
											id="fullName"
											placeholder={t('fullNamePlaceholder')}
											className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											{t('email')}
										</label>
										<input
											type="email"
											id="email"
											placeholder={t('emailPlaceholder')}
											className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
										/>
									</div>
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											{t('subject')}
										</label>
										<input
											type="text"
											id="subject"
											placeholder={t('subjectPlaceholder')}
											className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
										/>
									</div>
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											{t('message')}
										</label>
										<textarea
											id="message"
											rows={5}
											placeholder={t('messagePlaceholder')}
											className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
										/>
									</div>
									<button
										type="submit"
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
									>
										{t('submit')}
									</button>
								</form>
							</div>
						</div>

						<div className="space-y-6">
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
									{t('infoHeading')}
								</h3>
								<div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
									<p>{t('address')}</p>
									<p>{t('phone')}</p>
									<p>{t('emailAddress')}</p>
								</div>
							</div>

							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
									{t('socialHeading')}
								</h3>
								<div className="space-y-2">
									<a href="#" className="block text-blue-500 hover:text-blue-700 text-sm">
										{t('twitter')}
									</a>
									<a href="#" className="block text-blue-500 hover:text-blue-700 text-sm">
										{t('linkedin')}
									</a>
									<a href="#" className="block text-blue-500 hover:text-blue-700 text-sm">
										{t('github')}
									</a>
									<a href="#" className="block text-blue-500 hover:text-blue-700 text-sm">
										{t('instagram')}
									</a>
								</div>
							</div>
						</div>
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
