import styles from './header.module.css';
import logoImg from '@/public/assets/logo.png';
import { Navigation } from '../navigation/navigation';
import { SocialIcons } from '../social-icons/social-icons';
import Image from 'next/image';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__logo}>
					<Image
						src={logoImg}
						alt='Logo'
						className={styles.logo}
						width={100}
						height={50}
					/>
				</div>
				<div className={styles.header__navigation}>
					<Navigation />
				</div>
				<div className={styles.header__social}>
					<SocialIcons />
				</div>
			</div>
		</header>
	);
};
