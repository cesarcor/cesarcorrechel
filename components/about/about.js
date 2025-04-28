import styles from './about.module.css';
import { SectionHeading } from '../section-heading/section-heading';
import { Button } from '../button/button.js';
import cesar_correchel from '@/public/assets/cesar_correchel.jpg';

export const About = () => {
	return (
		<section className={styles.about_section}>
			<SectionHeading
				headingSmall='- About'
				headingLarge='Passionate About Everything Web'
				headingImage={cesar_correchel}
			/>
			<div className={styles.about_section__container}>
				<div className={styles.about_section__col1}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						fringilla, velit ac laoreet accumsan, lectus quam fermentum orci,
						accumsan congue.
					</p>
					<Button />
				</div>
				<div className={styles.about_section__col2}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						fringilla, velit ac laoreet accumsan, lectus quam fermentum orci,
						accumsan congue.
					</p>
					<ul>
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
