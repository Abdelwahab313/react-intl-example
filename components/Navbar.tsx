import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
	{ href: '/', key: 'home' },
	{ href: '/about', key: 'about' },
	{ href: '/products', key: 'products' },
	{ href: '/blog', key: 'blog' },
	{ href: '/portfolio', key: 'portfolio' },
	{ href: '/contact', key: 'contact' },
];

export default function Navbar() {
	const t = useTranslations('Navigation');
	const router = useRouter();

	return (
		<nav className="mb-8 flex justify-between items-center">
			<div className="flex flex-wrap gap-4">
				{navItems.map((item) =>
					router.pathname === item.href ? (
						<span key={item.key} className="text-gray-500">
							{t(item.key)}
						</span>
					) : (
						<Link
							key={item.key}
							href={item.href}
							className="text-blue-500 hover:text-blue-700"
						>
							{t(item.key)}
						</Link>
					)
				)}
			</div>
			<div className="w-48">
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
