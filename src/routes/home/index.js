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
		<div className={`${style.home} ${fadeIn ? style.fadeIn : ''}`}>
			<a type="button" className={style.btn} href="/test">Start Test</a>
		</div>
	)
};

export default Home;
