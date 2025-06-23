'use client';

import styles from './projects.module.css';
import { SectionHeading } from '../section-heading/section-heading';
import { Project } from './project/project.js';
import tempProject from '@/public/assets/temp-project.webp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
	const projects_container = useRef(null);
	const [tl, setTl] = useState();

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projects_container.current,
				start: 'top-=80vh bottom',
				end: 'top-=85vh top',
				scrub: true,
			},
		});
		setTl(tl);
	});

	const project_list = [
		{
			title: 'Project 1',
			description: 'Description of project 1',
			imageURL: tempProject,
		},
		{
			title: 'Project 2',
			description: 'Description of project 2',
			imageURL: tempProject,
		},
		{
			title: 'Project 3 - Advanced Computers',
			description: 'Description of project 3',
			imageURL: tempProject,
		},
	];

	return (
		<section className={styles.projects_section} ref={projects_container}>
			<SectionHeading
				heading_small='Projects'
				heading_large='Here are some of my recent works.'
			/>
			<div className={styles.projects_section__content}>
				{project_list.map((project, index) => (
					<Project project={project} key={index} />
				))}
			</div>
		</section>
	);
};
