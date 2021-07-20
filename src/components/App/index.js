import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { map } from 'ramda';

import routes, { DEFAULT_ROUTE_PATH, routesNotLog } from '../../routes';
import { useApp } from './hooks';
import NavigationLayout from '../NavigationLayout';

const MakeRoutes = ({routes}) => (
  <Switch>
    {map(
      (route) => (
        <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
      ),
      routes,
    )}
    <Redirect to={DEFAULT_ROUTE_PATH} />
  </Switch>
);

const App = () => {
  const { login } = useApp();

  return login ? (
    <NavigationLayout >
      <MakeRoutes routes={routes}/>
    </NavigationLayout>
  ) : (
      <MakeRoutes routes={routesNotLog}/>
  );
};

export default App;
