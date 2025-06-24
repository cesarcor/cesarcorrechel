'use client';

import styles from './section-heading.module.css';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SectionHeading = ({
	heading_small,
	heading_large,
	heading_image,
}) => {
	const section_heading_container = useRef(null);
	const section_heading_text_container = useRef(null);
	const heading_text_small = useRef(null);
	const heading_text_large = useRef(null);
	const heading_image_ref = useRef(null);

	useGSAP(() => {
		gsap.from(heading_text_small.current, {
			autoAlpha: 0.1,
			ease: 'power1.inOut',
			delay: 0.4,
			y: -150,
			duration: 3,
			scrollTrigger: {
				trigger: section_heading_container.current,
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		});

		gsap.from(heading_text_large.current, {
			autoAlpha: 0,
			yPercent: -80,
			ease: 'sine.in',
			scrollTrigger: {
				trigger: section_heading_container.current,
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		});

		gsap.from(heading_image_ref.current, {
			autoAlpha: 0,
			ease: 'power2.in',
			scrollTrigger: {
				trigger: section_heading_container.current,
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		});

		ScrollTrigger.refresh();
	}, [
		section_heading_container,
		heading_text_small,
		heading_text_large,
		heading_image_ref,
	]);

	return (
		<div className={styles.heading_container} ref={section_heading_container}>
			{heading_image && (
				<div className={styles.custom_heading_img_container}>
					<div ref={heading_image_ref}>
						<Image
							src={heading_image}
							alt='Custom Heading Image'
							className={styles.custom_heading_img}
							width={100}
							height={100}
						/>
					</div>
				</div>
			)}

			<div
				className={styles.heading_text_container}
				ref={section_heading_text_container}
			>
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
