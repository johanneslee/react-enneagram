import { h } from 'preact';
import { useState } from "preact/hooks";
import style from './style.css';

const Home = () => {
	const [fadeIn, setFadeIn] = useState(false);

	setTimeout(() => {
		console.log('timeout');
		setFadeIn(true);
	}, 1000);

	return (
		<main className={`${style.home} ${fadeIn ? style.fadeIn : ''}`}>
			<a className={style.btn} href="/tests">Start Test</a>
		</main>
	)
};

export default Home;
