'use client';

import styles from './hero.module.css';
import tempImg from '@/public/assets/temporary.webp';
import Image from 'next/image';
import { Button } from '../button/button';
import { HeroGraphic } from './hero-graphic/hero-graphic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
	const heroRef = useRef(null);
	const heroMedia = useRef(null);
	const heroTitle = useRef(null);
	const heroSubtitle = useRef(null);
	const heroBtn = useRef(null);
	const hasRun = useRef(false);
	const scrollTriggerRef = useRef(null);

	useGSAP(() => {
		gsap.set(
			[
				heroMedia.current,
				heroTitle.current,
				heroSubtitle.current,
				heroBtn.current,
			],
			{
				y: '100%',
				autoAlpha: 0,
			}
		);

		const runIntroAnimation = () => {
			if (hasRun.current) return;
			hasRun.current = true;

			const tl = gsap.timeline({
				onComplete: () => {
					setupScrollTrigger();
				},
			});

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
		};

		const setupScrollTrigger = () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: heroRef.current,
					start: '-20vh top',
					end: 'bottom top',
					scrub: true,
				},
			});

			scrollTriggerRef.current = tl.scrollTrigger;

			tl.to(heroMedia.current, {
				y: '-150%',
				autoAlpha: 0.3,
				ease: 'power1.inOut',
			})
				.to(
					heroTitle.current,
					{
						y: '-120%',
						autoAlpha: 0,
						ease: 'power1.inOut',
					},
					'<'
				)
				.to(
					heroSubtitle.current,
					{
						y: '-100%',
						autoAlpha: 0,
						ease: 'power2.inOut',
					},
					'<'
				)
				.to(
					heroBtn.current,
					{
						y: '135%',
						autoAlpha: 0,
						ease: 'sine.inOut',
					},
					'<'
				);
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

	useEffect(() => {
		return () => {
			if (scrollTriggerRef.current) {
				scrollTriggerRef.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.hero} ref={heroRef}>
			<div className={styles.hero__media_container}>
				<div className={styles.hero__media} ref={heroMedia}>
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
				<h1 className={styles.hero__title} ref={heroTitle}>
					Cesar <span className={styles.hero__title_highlight}>Correchel</span>
				</h1>
				<p className={styles.hero__subtitle} ref={heroSubtitle}>
					Web Designer - Web Developer - Web Project Manager
				</p>
				<div ref={heroBtn}>
					<Button />
				</div>
				<HeroGraphic />
			</div>
		</section>
	);
};
