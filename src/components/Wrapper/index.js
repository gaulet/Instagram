import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

import Box from '@material-ui/core/Box';

import useStyles from './styles';

const Wrapper = ({ children, className }) => {
  const classes = useStyles();

  return <Box className={classNames(classes.root, className)}>{children}</Box>;
};

Wrapper.propTypes = {
  children: node.isRequired,
  className: string,
};

export default Wrapper;
