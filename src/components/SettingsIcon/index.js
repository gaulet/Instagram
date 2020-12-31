import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import MuiSettingsIcon from '@material-ui/icons/Settings';

import { useBoolean } from '../../hooks';
import Menu from './Menu';
import useStyles from './styles';

const SettingsIcon = ({ className }) => {
  const classes = useStyles();
  const { value: menuOpened, setTrue: openMenu, setFalse: closeMenu } = useBoolean();

  return (
    <>
      <Menu open={menuOpened} handleClose={closeMenu} />
      <MuiSettingsIcon className={classNames(classes.root, className)} onClick={openMenu} />
    </>
  );
};

SettingsIcon.propTypes = {
  className: string,
};

export default SettingsIcon;
