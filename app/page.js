import styles from './page.module.css';
import { Header } from '../components/header/header.js';
import { Hero } from '../components/hero/hero.js';
import { About } from '../components/about/about.js';
import { Projects } from '../components/projects/projects.js';
import { Footer } from '../components/footer/footer.js';

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<Hero />
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
