import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Tests from '../routes/tests';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Tests path="/tests" />
		</Router>
	</div>
)

export default App;
