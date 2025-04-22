import styles from './social-icons.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialIcons = () => {
	return (
		<ul className={styles.social_icons}>
			<li>
				<a href='#' target='_blank'>
					<FaLinkedin />
				</a>
			</li>
			<li>
				<a href='#' target='_blank'>
					<FaGithub />
				</a>
			</li>
		</ul>
	);
};
