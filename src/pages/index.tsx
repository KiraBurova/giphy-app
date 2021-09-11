import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const DetailedGif = lazy(() => import('./detailedGif'));
const Main = lazy(() => import('./main'));

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={DetailedGif} />
      <Route path='/' component={Main} />
    </Switch>
  );
};

export default Routing;
