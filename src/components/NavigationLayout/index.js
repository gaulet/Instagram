import React from 'react';
import { node } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Header from '../Header';
import Footer from '../Footer';
import useStyles from './styles';

const NavigationLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column" wrap="nowrap">
      <Grid className={classes.header} item>
        <Header />
      </Grid>
      <Grid className={classes.content} item>
        {children}
      </Grid>
      <Hidden mdUp>
        <Grid className={classes.footer} item>
          <Footer />
        </Grid>
      </Hidden>
    </Grid>
  );
};

NavigationLayout.propTypes = {
  children: node,
};

export default NavigationLayout;
