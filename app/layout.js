import { Libre_Bodoni, Poppins } from 'next/font/google';
import './globals.css';

const LibreBodoni = Libre_Bodoni({
	subsets: ['latin'],
	weight: ['700'],
	variable: '--font-libre-bodoni',
});

const PoppinsFont = Poppins({
	subsets: ['latin'],
	weight: ['300', '500'],
	variable: '--font-poppins',
});

export const metadata = {
	title: 'Cesar Correchel - Cesar Correchel',
	description: 'Web developer and designer from Nicaragua',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${LibreBodoni.variable} ${PoppinsFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
