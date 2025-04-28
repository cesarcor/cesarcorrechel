import styles from './project.module.css';
import Image from 'next/image';
import { Button } from '../../button/button.js';

export const Project = ({ project }) => {
	return (
		<div className={styles.project_item}>
			<div className={styles.project_title_container}>
				<h4>{project.title}</h4>
			</div>
			<div>
				<div className={styles.project_img_container}>
					<Image
						src={project.imageURL}
						alt={project.title}
						className={styles.project_img}
						width={200}
						height={300}
					/>
				</div>
			</div>
		</div>
	);
};
