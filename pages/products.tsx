import { useTranslations } from 'next-intl';
import Navbar from '../components/Navbar';

const products = [
	{ nameKey: 'product1Name', descKey: 'product1Desc', price: '$199.99', emoji: '🎧' },
	{ nameKey: 'product2Name', descKey: 'product2Desc', price: '$299.99', emoji: '⌚' },
	{ nameKey: 'product3Name', descKey: 'product3Desc', price: '$79.99', emoji: '🔊' },
	{ nameKey: 'product4Name', descKey: 'product4Desc', price: '$49.99', emoji: '💻' },
	{ nameKey: 'product5Name', descKey: 'product5Desc', price: '$129.99', emoji: '⌨️' },
	{ nameKey: 'product6Name', descKey: 'product6Desc', price: '$59.99', emoji: '🔌' },
];

export default function Products() {
	const t = useTranslations('ProductsPage');

	return (
		<div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<Navbar />

				<main>
					<div className="mb-8">
						<h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
							{t('title')}
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
							{t('subtitle')}
						</p>
						<p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
							{t('productCount', { count: products.length })}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map((product) => (
							<div
								key={product.nameKey}
								className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
							>
								<div className="text-4xl mb-4">{product.emoji}</div>
								<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
									{t(product.nameKey)}
								</h2>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{t(product.descKey)}
								</p>
								<div className="flex justify-between items-center">
									<span className="text-lg font-bold text-gray-900 dark:text-white">
										{product.price}
									</span>
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
										{t('addToCart')}
									</button>
								</div>
							</div>
						))}
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
