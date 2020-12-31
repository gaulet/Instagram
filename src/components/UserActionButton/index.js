import React from 'react';
import { oneOf, object } from 'prop-types';
import { values } from 'ramda';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';

import { USER_ACTIONS } from '../../constants';
import { useBoolean } from '../../hooks';
import messages from './messages';
import UnfollowDialog from './UnfollowDialog';

const UserActionButton = ({ action, ...MuiButtonProps }) => {
  const { value: unfollowMenuOpened, setTrue: openUnfollowMenu, setFalse: closeUnfollowMenu } = useBoolean();

  switch (action) {
    case USER_ACTIONS.following:
      return (
        <>
          <UnfollowDialog open={unfollowMenuOpened} handleClose={closeUnfollowMenu} />
          <Button {...MuiButtonProps} onClick={openUnfollowMenu}>
            <FormattedMessage {...messages.following} />
          </Button>
        </>
      );
    case USER_ACTIONS.followBack:
      return (
        <Button {...MuiButtonProps}>
          <FormattedMessage {...messages.followBack} />
        </Button>
      );
    case USER_ACTIONS.me:
      return <></>;
    default:
      return (
        <Button {...MuiButtonProps}>
          <FormattedMessage {...messages.follow} />
        </Button>
      );
  }
};

UserActionButton.propTypes = {
  action: oneOf(values(USER_ACTIONS)),
  MuiButtonProps: object,
};

export default UserActionButton;
