'use client';

import styles from './button.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Button = ({ parentRef, scrollTriggerStart, scrollTriggerEnd }) => {
	const btn_ref = useRef(null);

	useGSAP(() => {
		if (!parentRef?.current) return;

		gsap.from(btn_ref.current, {
			autoAlpha: 0,
			ease: 'power2.inOut',
			yPercent: 35,
			scrollTrigger: {
				trigger: parentRef.current,
				start: scrollTriggerStart || 'top 50%',
				end: scrollTriggerEnd || 'bottom 80%',
				scrub: true,
			},
		});

		ScrollTrigger.refresh();
	}, [parentRef?.current, scrollTriggerStart, scrollTriggerEnd]);

	return (
		<a href='#' className={styles.btn} ref={btn_ref}>
			Say Hi! <span className={styles.btn_arrow}>→</span>
		</a>
	);
};
