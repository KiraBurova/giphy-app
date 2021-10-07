import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const DetailedGifPage = lazy(() => import('./details'));
const MainPage = lazy(() => import('./main'));

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/detailed' component={DetailedGifPage} />
      <Route exact path='/' component={MainPage} />
    </Switch>
  );
};

export default Routing;
