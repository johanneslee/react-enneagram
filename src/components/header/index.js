import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => {
	const [completedTest, setCompletedTest] = useState(false);
	
	return (
		<header class={style.header}>
			<h1>Preact Enneagram</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				{completedTest &&
					<>
						<Link activeClassName={style.active} href="/types">Types</Link>
					</>
				}
			</nav>
		</header>
	)
};

export default Header;
