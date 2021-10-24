import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Contact } from './common/Contact';
import { Container } from './common/Container';
import { Info } from './common/Info';
import Section from './common/Section';
import listOfGoals from './common/Section/Data/goals';
import listOfSkills from './common/Section/Data/skills';
import { Portfolio } from './features/Portfolio';
import { ThemeSwitcher } from './features/ThemeSwitcher';
import { fetchThemeState, selectTheme } from './features/ThemeSwitcher/themeSwitcherSlice';
import { GlobalStyle } from './GlobalStyle';
import { darkMode, lightMode } from './theme';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemeState());
  }, [dispatch]);

  const isThemeDark = useSelector(selectTheme);

  const theme = isThemeDark ? darkMode : lightMode;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
         <ThemeSwitcher />
          <Info />
          <Section 
            title="My skillset includes 🛠️"
            elements={listOfSkills}
          />
          <Section 
            title="What I want to learn next 🚀"
            elements={listOfGoals}
          />
          <Portfolio />
          <Contact />
      </Container>
    </ThemeProvider>
  );

}

export default App;
