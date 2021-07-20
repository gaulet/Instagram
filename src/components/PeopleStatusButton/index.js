import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';

import { useBoolean } from '../../hooks';
import messages from './messages';
import UnfollowDialog from './UnfollowDialog';

const PeopleStatusButton = ({ status }) => {
  const { value: unfollowMenuOpened, setTrue: openUnfollowMenu, setFalse: closeUnfollowMenu } = useBoolean();

  switch (status) {
    case 'following':
      return (
        <Button size="small">
          <FormattedMessage {...messages.follow} />
        </Button>
      );
    default:
      return (
        <>
          <UnfollowDialog open={unfollowMenuOpened} onClose={closeUnfollowMenu} />
          <Button size="small" onClick={openUnfollowMenu}>
            <FormattedMessage {...messages.following} />
          </Button>
        </>
      );
  }
};

PeopleStatusButton.propTypes = {
  status: string.isRequired,
};

export default PeopleStatusButton;
