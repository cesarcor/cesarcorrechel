'use client';

import styles from './hero-graphic.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const HeroGraphic = () => {
	const heroGraphicImg = useRef(null);

	useGSAP(() => {
		const element = heroGraphicImg.current;
		if (!element) return;

		gsap.to(element, {
			autoAlpha: 0.45,
			ease: 'power1.in',
		});

		gsap.to(element, {
			rotate: 360,
			ease: 'none',
			transformOrigin: '50% 50%',
			scrollTrigger: {
				strart: 'top bottom',
				end: 'bottom top',
				scrub: 1,
			},
		});

		gsap.to(element, {
			opacity: 0.01,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 10vh',
				end: 'bottom top',
				scrub: true,
			},
		});
	}, []);

	return (
		<div className={styles.hero__graphic}>
			<img
				ref={heroGraphicImg}
				src='/assets/svgs/orbit.svg'
				alt='Orbit'
				className={styles.hero__orbit_img}
				width={800}
				height={800}
			/>
		</div>
	);
};
