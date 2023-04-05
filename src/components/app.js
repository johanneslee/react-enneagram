import { createContext, h } from 'preact';
import { Router } from 'preact-router';
import { useState } from 'preact/hooks';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Tests from '../routes/tests';
import Results from '../routes/results';

export const AppContext = createContext([null, () => {}]);

const App = () => {
  const [type, setType] = useState(null);

  return (
    <div id="app">
      <AppContext.Provider value={[type, setType]}>
        <Header />
        <Router>
          <Home path="/" />
          <Tests path="/tests" />
          <Results path="/results" />
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;
