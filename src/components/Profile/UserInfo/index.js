import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, bool, string, object } from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { USER_ACTIONS } from '../../../constants';
import { useBoolean } from '../../../hooks';
import SettingsIcon from '../../SettingsIcon';
import UserActionButton from '../../UserActionButton';
import UsersMenu from '../../UsersMenu';
import ProfilePictureMenu from './ProfilePictureMenu';
import useStyles from './styles';
import messages from './messages';

const ownProfile = true;

const Actions = ({ action, className }) => {
  const classes = useStyles();

  return (
    <Grid className={className} container wrap="nowrap">
      <Button
        className={classes.messageButton}
        fullWidth
        size="small"
        variant="outlined"
        color="secondary"
        onClick={() => alert('go to conversation')}
      >
        <Typography component={FormattedMessage} {...messages.message} />
      </Button>
      <UserActionButton action={action} fullWidth size="small" variant="contained" color="secondary" />
    </Grid>
  );
};

Actions.propTypes = {
  action: string.isRequired,
  className: string,
};

const Header = ({ ownProfile, name, lastName }) => {
  const classes = useStyles();

  const endAdornment = ownProfile ? (
    <SettingsIcon className={classes.settingsIcon} />
  ) : (
    <Hidden xsDown>
      <Actions className={classes.actions} action={USER_ACTIONS.follow} />
    </Hidden>
  );

  return (
    <Grid container wrap="nowrap">
      <Grid item>
        <Typography className={classes.userName}>{lastName + name}</Typography>
      </Grid>
      <Grid item>{endAdornment}</Grid>
    </Grid>
  );
};

Header.propTypes = {
  ownProfile: bool.isRequired,
  name: string,
  lastName: string,
};

const Stats = ({ numberFollowers, numberFollowing, openFollowersMenu, openFollowingMenu, minify }) => {
  const classes = useStyles();

  const numberDisplay = minify ? 'initial' : 'inline';
  const containerSpacing = minify ? 'space-evenly' : 'space-between';

  return (
    <Grid container justify={containerSpacing} wrap="nowrap">
      <Grid item className={classes.center}>
        <Typography display={numberDisplay} className={classes.number}>
          6
        </Typography>
        <Typography component={FormattedMessage} {...messages.posts} />
      </Grid>
      <Grid item className={classes.clickableStats} onClick={openFollowersMenu}>
        <Typography display={numberDisplay} className={classes.number}>
          {numberFollowers}
        </Typography>
        <Typography component={FormattedMessage} {...messages.followers} />
      </Grid>
      <Grid item className={classes.clickableStats} onClick={openFollowingMenu}>
        <Typography display={numberDisplay} className={classes.number}>
          {numberFollowing}
        </Typography>
        <Typography component={FormattedMessage} {...messages.following} />
      </Grid>
    </Grid>
  );
};

Stats.protoTypes = {
  openFollowersMenu: func,
  openFollowingMenu: func,
  minify: bool,
};

const UserInfo = ({
  id = 0,
  name = '',
  lastName = 'Anonymous',
  followers = [],
  following = [],
  picture = '/img/blue.jpg',
  myId = 0,
}) => {
  const classes = useStyles();
  const intl = useIntl();
  const { value: followersMenuOpened, setTrue: openFollowersMenu, setFalse: closeFollowersMenu } = useBoolean();
  const { value: followingMenuOpened, setTrue: openFollowingMenu, setFalse: closeFollowingMenu } = useBoolean();
  const {
    value: profilePictureMenuOpened,
    setTrue: openProfilePictureMenu,
    setFalse: closeProfilePictureMenu,
  } = useBoolean();

  return (
    <>
      <UsersMenu
        open={followersMenuOpened}
        handleClose={closeFollowersMenu}
        title={intl.formatMessage(messages.followersTitle)}
        profiles={followers}
      />
      <UsersMenu
        open={followingMenuOpened}
        handleClose={closeFollowingMenu}
        title={intl.formatMessage(messages.followingTitle)}
        profiles={following}
      />
      <ProfilePictureMenu open={profilePictureMenuOpened} handleClose={closeProfilePictureMenu} />
      <Grid container alignItems="center" wrap="nowrap">
        <Grid item className={classes.center} xs={4}>
          <img className={classes.profilePicture} onClick={openProfilePictureMenu} src={picture} alt="profile" />
        </Grid>
        <Grid item xs={5}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Header name={name} lastName={lastName} ownProfile={myId === id} />
            </Grid>
            <Hidden smDown>
              <Grid item>
                <Stats
                  numberFollowers={followers.length}
                  numberFollowing={following.length}
                  openFollowersMenu={openFollowersMenu}
                  openFollowingMenu={openFollowingMenu}
                />
              </Grid>
            </Hidden>
            <Grid item>
              <Typography className={classes.fullName}>{name + ' ' + lastName}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smUp>{!ownProfile && <Actions className={classes.actionsXs} action={USER_ACTIONS.follow} />}</Hidden>
      <Divider className={classes.divider} />
      <Hidden mdUp>
        <Stats
          numberFollowers={followers.length}
          numberFollowing={following.length}
          openFollowersMenu={openFollowersMenu}
          openFollowingMenu={openFollowingMenu}
          minify
        />
        <Divider className={classes.divider} />
      </Hidden>
    </>
  );
};

UserInfo.protoTypes = {
  id: string,
  myId: string,
  name: string,
  lastName: string,
  picture: string,
  followers: object,
  following: object,
};

export default UserInfo;
