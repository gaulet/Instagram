import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider as MuiProvider } from '@material-ui/styles';
import { useConnect } from './hooks';

const ThemeProvider = ({ children }) => {
  const {
    theme: { value },
  } = useConnect();

  return <MuiProvider theme={value}>{children}</MuiProvider>;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
