import { Libre_Bodoni } from 'next/font/google';
import './globals.css';

const LibreBodoni = Libre_Bodoni({
	variable: '--font-libre-bodoni',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Cesar Correchel - Cesar Correchel',
	description: 'Web developer and designer from Nicaragua',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${LibreBodoni.variable}`}>{children}</body>
		</html>
	);
}
