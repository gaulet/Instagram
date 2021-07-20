import React from 'react';
import { func, string, object } from 'prop-types';
import classNames from 'classnames';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import useStyles from './styles';

const CloseIcon = ({ handleClick, className, ...muiIconsProps }) => {
  const classes = useStyles();

  return <CloseRoundedIcon {...muiIconsProps} className={classNames(classes.root, className)} onClick={handleClick} />;
};

CloseIcon.propTypes = {
  handleClick: func,
  className: string,
  muiIconsProps: object,
};

export default CloseIcon;
