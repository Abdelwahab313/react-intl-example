import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'es', 'fr'],
		defaultLocale: 'en',
	},
};

export default withNextIntl(nextConfig);
