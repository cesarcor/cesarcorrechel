'use client';

import styles from './header.module.css';
import logoImg from '@/public/assets/logo.png';
import { Navigation } from '../navigation/navigation';
import { SocialIcons } from '../social-icons/social-icons';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Header = () => {
	const headerRef = useRef(null);
	const hasRun = useRef(false);

	useGSAP(() => {
		const header_element = headerRef.current;
		if (!header_element) return;
		hasRun.current = true;

		const runIntroAnimation = () => {
			if (document.visibilityState === 'visible') {
				gsap.fromTo(
					header_element,
					{ y: -400, opacity: 0 },
					{ y: 0, autoAlpha: 1 }
				);
			}
		};

		if (document.visibilityState === 'visible') {
			runIntroAnimation();
		} else {
			const onVisible = () => {
				if (document.visibilityState === 'visible') {
					runIntroAnimation();
					document.removeEventListener('visibilitychange', onVisible);
				}
			};
			document.addEventListener('visibilitychange', onVisible);
		}
	}, []);

	return (
		<header className={styles.header} ref={headerRef}>
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
