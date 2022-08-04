import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Test from '../routes/test';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Test path="/test" />
		</Router>
	</div>
)

export default App;
