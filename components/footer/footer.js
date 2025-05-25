import styles from './footer.module.css';
import Image from 'next/image';
import logoImg from '@/public/assets/logo.png';
import { Navigation } from '../navigation/navigation';
import { SocialIcons } from '../social-icons/social-icons';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__logo}>
					<Image
						src={logoImg}
						alt='Logo'
						className={styles.logo}
						width={100}
						height={50}
					/>
				</div>

				<div className={styles.footer__menu}>
					<Navigation />
				</div>

				<div className={styles.footer__socials}>
					<SocialIcons />
				</div>

				<div className={styles.footer__bottom}>
					<p>© 2025 Cesar Correchel. All rights reserved.</p>
					<p>Designed & Developed by Cesar Correchel</p>
				</div>
			</div>
		</footer>
	);
};
