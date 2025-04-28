import styles from './projects.module.css';
import { SectionHeading } from '../section-heading/section-heading';
import { Project } from './project/project.js';
import tempProject from '@/public/assets/temp-project.webp';

export const Projects = () => {
	const projectList = [
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
			title: 'Project 3',
			description: 'Description of project 3',
			imageURL: tempProject,
		},
	];

	return (
		<section className={styles.projects_section}>
			<SectionHeading
				headingSmall='Projects'
				headingLarge='Here are some of my recent works.'
			/>
			<div className={styles.projects_section__content}>
				{projectList.map((project, index) => (
					<Project project={project} key={index} />
				))}
			</div>
		</section>
	);
};
