import styles from './navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__list}>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Projects</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};
