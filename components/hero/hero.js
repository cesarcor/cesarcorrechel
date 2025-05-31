'use client';

import styles from './hero.module.css';
import tempImg from '@/public/assets/temporary.webp';
import Image from 'next/image';
import { Button } from '../button/button';
import { HeroGraphic } from './hero-graphic/hero-graphic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
	const heroRef = useRef(null);
	const heroMedia = useRef(null);
	const heroTitle = useRef(null);
	const heroSubtitle = useRef(null);
	const heroBtn = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			heroMedia.current,
			{ y: '100%', autoAlpha: 0 },
			{ y: '0%', autoAlpha: 1, duration: 1, ease: 'power3.out' }
		)
			.fromTo(
				heroTitle.current,
				{ y: '100%', autoAlpha: 0 },
				{ y: '0%', autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
				'-=0.6'
			)
			.fromTo(
				heroSubtitle.current,
				{ y: '20%', autoAlpha: 0 },
				{ y: '0%', autoAlpha: 1, duration: 0.6, ease: 'power3.out' },
				'-=0.5'
			)
			.fromTo(
				heroBtn.current,
				{ y: '20%', autoAlpha: 0 },
				{ y: '0%', autoAlpha: 1, duration: 0.6, ease: 'power3.out' },
				'-=0.5'
			);
	}, []);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top 10vh',
				end: 'bottom top',
				scrub: true,
			},
		});

		tl.to(heroTitle.current, {
			y: '-100%',
			autoAlpha: 0,
			ease: 'power1.inOut',
		})
			.to(
				heroSubtitle.current,
				{
					y: '-100%',
					autoAlpha: 0,
					ease: 'power1.inOut',
				},
				'<'
			)
			.to(
				heroBtn.current,
				{
					y: '100%',
					autoAlpha: 0,
					ease: 'power1.inOut',
				},
				'<'
			)
			.to(
				heroMedia.current,
				{
					y: '-100%',
					autoAlpha: 0.3,
					ease: 'power1.inOut',
				},
				'<'
			);
	}, []);

	return (
		<section className={styles.hero} ref={heroRef}>
			<div className={styles.hero__media_container}>
				<div
					className={styles.hero__media}
					ref={heroMedia}
					style={{ visibility: 'hidden' }}
				>
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
				<h1
					className={styles.hero__title}
					ref={heroTitle}
					style={{ visibility: 'hidden' }}
				>
					Cesar <span className={styles.hero__title_highlight}>Correchel</span>
				</h1>
				<p
					className={styles.hero__subtitle}
					ref={heroSubtitle}
					style={{ visibility: 'hidden' }}
				>
					Web Designer - Web Developer - Web Project Manager
				</p>
				<div ref={heroBtn} style={{ visibility: 'hidden' }}>
					<Button />
				</div>
				<HeroGraphic />
			</div>
		</section>
	);
};
