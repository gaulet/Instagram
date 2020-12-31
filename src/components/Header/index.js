import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ThemeIcon from '@material-ui/icons/Brightness4Rounded';
import TranslateIcon from '@material-ui/icons/TranslateRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

import { heartSvg, profileSvg } from '../../elements/svg';
import { HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, ACTIVITY_ROUTE_PATH } from '../../routes';
import SearchBar from '../SearchBar';
import ActivityMenu from '../ActivityMenu';
import { useConnect } from './hooks';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const { setTheme } = useConnect();
  const [value, setValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const closeActivityMenu = () => setAnchorEl(null);
  const openActivityMenu = (event) => setAnchorEl(event.currentTarget);

  return (
    <>
      <ActivityMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={closeActivityMenu} />
      <Grid className={classes.root} container justify="space-evenly" wrap="nowrap" alignItems="center">
        <Hidden xsDown>
          <Grid item>
            <Link to={HOME_ROUTE_PATH}>
              <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                <Grid item>
                  <img alt="main-logo" src="/img/logo.png" className={classes.logoInsta} />
                </Grid>
                <Grid item>
                  <Divider className={classes.divider} orientation="vertical" />
                </Grid>
                <Grid item>
                  <img alt="main-title" src="/img/instagram_logo.png" className={classes.typoInsta} />
                </Grid>
              </Grid>
            </Link>
          </Grid>
        </Hidden>
        <Grid item>
          <SearchBar value={value} onChange={setValue} />
        </Grid>
        <Grid item>
          <Grid container wrap="nowrap">
            <Hidden smDown>
              <Grid item>
                <IconButton onClick={openActivityMenu} disabled={location.pathname === ACTIVITY_ROUTE_PATH}>
                  <SvgIcon viewBox="0 0 48 48">
                    <path d={heartSvg}></path>
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component={Link} to={PROFILE_ROUTE_PATH + '/marvinGaulet'}>
                  <SvgIcon viewBox="0 0 48 48">
                    <path d={profileSvg}></path>
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component={Link} to={PROFILE_ROUTE_PATH + '/floChanal'}>
                  <SvgIcon viewBox="0 0 48 48">
                    <path d={profileSvg}></path>
                  </SvgIcon>
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              <IconButton onClick={setTheme}>
                <ThemeIcon className={classes.icons} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <TranslateIcon className={classes.icons} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
