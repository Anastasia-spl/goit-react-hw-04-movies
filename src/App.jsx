import { Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { pagesRoutes } from './routes';
import Loader from './components/Loader';
import Container from './components/Container';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Switch>
                {pagesRoutes.map(({ exact, path, component: Component }) => (
                  <Route
                    path={path}
                    exact={exact}
                    component={Component}
                    key={path}
                  />
                ))}
              </Switch>
            </Suspense>
          </Container>
        </Section>
      </Main>
    </div>
  );
}

export default App;
