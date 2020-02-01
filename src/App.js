import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const switchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header switchTheme={switchTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
