import styles from './hero.module.css';
import tempImg from '@/public/assets/temporary.webp';
import Image from 'next/image';
import { Button } from '../button/button';
import { HeroGraphic } from './hero-graphic/hero-graphic.js';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__media_container}>
				<div className={styles.hero__media}>
					<Image
						src={tempImg}
						alt='Hero Image'
						className={styles.hero__img}
						width={300}
						height={700}
					/>
				</div>
			</div>
			<div className={styles.hero__content_container}>
				<h1 className={styles.hero__title}>
					Cesar <span className={styles.hero__title_highlight}>Correchel</span>
				</h1>
				<p className={styles.hero__subtitle}>
					Web Designer - Web Developer - Web Project Manager
				</p>
				<Button />
				<HeroGraphic />
			</div>
		</section>
	);
};
