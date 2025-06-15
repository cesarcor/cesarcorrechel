'use client';

import styles from './section-heading.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export const SectionHeading = ({
	heading_small,
	heading_large,
	heading_image,
	timeline,
}) => {
	const section_heading_container = useRef(null);
	const section_heading_text_container = useRef(null);
	const heading_text_small = useRef(null);
	const heading_text_large = useRef(null);
	const heading_image_ref = useRef(null);

	useGSAP(() => {
		if (!timeline) return;

		timeline.from(section_heading_text_container.current, {
			yPercent: 40,
			autoAlpha: 0,
			ease: 'power1.in',
		});
	});

	return (
		<div className={styles.heading_container} ref={section_heading_container}>
			{heading_image && (
				<div className={styles.custom_heading_img_container}>
					<div>
						<Image
							src={heading_image}
							alt='Custom Heading Image'
							className={styles.custom_heading_img}
							width={100}
							height={100}
							ref={heading_image_ref}
						/>
					</div>
				</div>
			)}

			<div ref={section_heading_text_container}>
				<h2 className={styles.heading_small} ref={heading_text_small}>
					{heading_small}
				</h2>
				<h3 className={styles.heading_large} ref={heading_text_large}>
					{heading_large}
				</h3>
			</div>
		</div>
	);
};
