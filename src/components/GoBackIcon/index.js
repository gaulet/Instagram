import React from 'react';
import { func, string } from 'prop-types';
import classNames from 'classnames';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import useStyles from './styles';

const GoBackIcon = ({ handleClick, className }) => {
  const classes = useStyles();

  return <ArrowBackIosRoundedIcon className={classNames(classes.root, className)} onClick={handleClick} />;
};

GoBackIcon.propTypes = {
  handleClick: func,
  className: string,
};

export default GoBackIcon;
