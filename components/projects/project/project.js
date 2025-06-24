'use client';

import styles from './project.module.css';
import Image from 'next/image';
import { Button } from '../../button/button.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export const Project = ({ project }) => {
	const project_ref = useRef(null);
	const project_title_container_ref = useRef(null);
	const project_img_ref = useRef(null);
	const project_title_ref = useRef(null);
	const project_description_ref = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: project_ref.current,
					start: 'top-=50vh bottom',
					end: 'bottom-=800vh top',
					scrub: true,
				},
			});

			tl.from(project_img_ref.current, {
				scale: 0.35,
				autoAlpha: 0.45,
				ease: 'power1.out',
			})
				.from(
					project_title_ref.current,
					{
						autoAlpha: 0.3,
						ease: 'back.in',
					},
					'<+=0.1'
				)
				.from(
					project_description_ref.current,
					{
						autoAlpha: 0.55,
						ease: 'back.in',
					},
					'<+=0.2'
				);

			const mm = gsap.matchMedia();
			mm.add('(min-width: 768px)', () => {
				tl.to(
					project_title_container_ref.current,
					{
						yPercent: -100,
					},
					'<'
				);
			});
		},
		{ scope: project_ref }
	);

	return (
		<article className={styles.project_item} ref={project_ref}>
			<div
				className={styles.project_title_container}
				ref={project_title_container_ref}
			>
				<h4 ref={project_title_ref}>{project.title}</h4>
				<p ref={project_description_ref}>
					Lorem ipsum doloret et min de larus consigiani confieti
				</p>
				<Button
					parentRef={project_ref}
					scrollTriggerStart='top 50%'
					scrollTriggerEnd='bottom 80%'
				/>
			</div>

			<div className={styles.project_img_col}>
				<div className={styles.project_img_container} ref={project_img_ref}>
					<Image
						src={project.imageURL}
						alt={project.title}
						className={styles.project_img}
						width={400}
						height={1000}
					/>
				</div>
			</div>
		</article>
	);
};
