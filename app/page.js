import styles from './page.module.css';
import { Header } from '../components/header/header.js';
import { Hero } from '../components/hero/hero.js';

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<Hero />
			</main>
		</div>
	);
}
