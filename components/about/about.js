'use client';

import styles from './about.module.css';
import { SectionHeading } from '../section-heading/section-heading';
import { Button } from '../button/button.js';
import cesar_correchel from '@/public/assets/cesar_correchel.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export const About = () => {
	const aboutRef = useRef(null);
	const c_shape = useRef(null);
	const firstParagraph = useRef(null);
	const btn_container = useRef(null);
	const secondParagraph = useRef(null);
	const skillList = useRef(null);

	useGSAP(
		() => {
			const list_items = gsap.utils.toArray(skillList.current.children);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top-=80vh bottom',
					end: 'bottom-=800vh top',
					scrub: true,
				},
			});

			gsap.from(c_shape.current, {
				xPercent: -20,
				opacity: 0,
				ease: 'power2.out',
				duration: 1.2,
				delay: 0.4,
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top 75%',
					end: 'bottom 55%',
					scrub: true,
				},
			});

			gsap.from(firstParagraph.current, {
				xPercent: -20,
				opacity: 0.05,
				ease: 'power2.out',
				duration: 1.2,
				scrollTrigger: {
					trigger: firstParagraph.current,
					start: 'top 75%',
					end: 'bottom 55%',
					scrub: true,
				},
			});

			gsap.from(btn_container.current, {
				y: 100,
				opacity: 0,
				ease: 'power2.out',
				duration: 1.2,
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top 65%',
					end: 'bottom top',
					scrub: true,
				},
			});

			gsap.from(secondParagraph.current, {
				xPercent: 20,
				opacity: 0.05,
				ease: 'power2.out',
				duration: 1.2,
				scrollTrigger: {
					trigger: secondParagraph.current,
					start: 'top 75%',
					end: 'bottom 55%',
					scrub: true,
				},
			});

			const tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top 65vh',
					end: 'bottom-=805vh top',
					scrub: true,
				},
			});

			tl.addLabel('skills', 0.6);

			list_items.forEach((item, index) => {
				tl2.from(
					item,
					{
						xPercent: 25,
						autoAlpha: 0,
						stagger: 0.1,
						ease: 'power1.out',
						delay: index * 0.15,
						duration: 0.6,
					},
					'skills+=' + index * 0.15
				);
			});
		},
		{ scope: aboutRef }
	);

	return (
		<section className={styles.about_section} ref={aboutRef}>
			<div className={styles.about_section__container}>
				<SectionHeading
					heading_small='- About'
					heading_large='Passionate About Everything Web'
					heading_image={cesar_correchel}
				/>

				<div className={styles.about_section__col1}>
					<img
						src='assets/svgs/c-shape.svg'
						alt='Cesar Correchel'
						className={styles.c_shape}
						ref={c_shape}
					/>
					<p ref={firstParagraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						fringilla, velit ac laoreet accumsan, lectus quam fermentum orci,
						accumsan congue.
					</p>
					<div ref={btn_container} className={styles.btn_container}>
						<Button />
					</div>
				</div>
				<div className={styles.about_section__col2}>
					<p ref={secondParagraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						fringilla, velit ac laoreet accumsan, lectus quam fermentum orci,
						accumsan congue.
					</p>
					<ul ref={skillList}>
						<li>
							<span>HTML & CSS (of course!)</span>
						</li>
						<li>
							<span>JavaScript</span>
						</li>
						<li>
							<span>React</span>
						</li>
						<li>
							<span>Next.js</span>
						</li>
						<li>
							<span>WordPress</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
