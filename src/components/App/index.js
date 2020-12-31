import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { map } from 'ramda';

import routes, { DEFAULT_ROUTE_PATH } from '../../routes';
import NavigationLayout from '../NavigationLayout';
import { useApp } from './hooks';

const MakeRoutes = () => (
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
  const history = useHistory();
  const { myProfile } = useApp();

  useEffect(() => {
    myProfile ? history.push('/') : history.push('/login');
  }, [myProfile, history]);

  return myProfile ? (
    <NavigationLayout>
      <MakeRoutes />
    </NavigationLayout>
  ) : (
    <MakeRoutes />
  );
};

export default App;
