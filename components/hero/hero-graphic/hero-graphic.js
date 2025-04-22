import styles from './hero-graphic.module.css';
import Image from 'next/image';

export const HeroGraphic = () => {
	return (
		<div className={styles.hero__graphic}>
			<Image
				src='/assets/svgs/orbit.svg'
				alt='Orbit'
				className={styles.hero__orbit_img}
				width={800}
				height={800}
			/>
		</div>
	);
};
