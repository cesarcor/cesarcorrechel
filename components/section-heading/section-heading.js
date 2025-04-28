import styles from './section-heading.module.css';
import Image from 'next/image';

export const SectionHeading = (props) => {
	return (
		<div className={styles.heading_container}>
			{props.headingImage && (
				<div className={styles.custom_heading_img_container}>
					<div>
						<Image
							src={props.headingImage}
							alt='Custom Heading Image'
							className={styles.custom_heading_img}
							width={100}
							height={100}
						/>
					</div>
				</div>
			)}

			<div>
				<h2 className={styles.heading_small}>{props.headingSmall}</h2>
				<h3 className={styles.heading_large}>{props.headingLarge}</h3>
			</div>
		</div>
	);
};
