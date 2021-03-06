// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// local modules
import { Layout } from './layouts/Layout';
import { Home as HomePage } from './pages/Home';
import { BeersList as BeersPage } from './components/BeersList';
import { BeerDetail as BeerDetailPage } from './components/BeerDetail';
import { AddBeer as AddBeerPage } from './components/AddBeer';

// styled components
import { GlobalStyle } from './styles/Global';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/beers" exact component={BeersPage} />
            <Route path="/beers/new" exact component={AddBeerPage} />
            <Route path="/beers/:id" exact component={BeerDetailPage} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};
