import { FOLLOW, FOLLOWING, FOLLOW_AND_FOLLOWING, ME, PROFILE } from '../../constants';

  const marvinGaulet = {
    id: 'marvinGaulet',
    name: 'marvin',
    lastName: 'gaulet',
    picture: '/img/marvin.jpg',
    statusFollow: [
      { id: 'floChanal', status: FOLLOW_AND_FOLLOWING },
      { id: 'alexGaulet', status: FOLLOW },
      { id: 'marvinGaulet', status: ME },
    ],
  };
  const floChanal = {
    id: 'floChanal',
    name: 'flo',
    lastName: 'chanal',
    picture: '/img/fchanal.jpg',
    statusFollow: [
      { id: 'floChanal', status: ME },
      { id: 'enzoRiki', status: FOLLOW },
      { id: 'marvinGaulet', status: FOLLOW_AND_FOLLOWING },
      { id: 'alexGaulet', status: FOLLOW },
    ],
  };
  const alexGaulet = {
    id: 'alexGaulet',
    name: 'alexandre',
    lastName: 'gaulet',
    picture: '/img/alex.jpg',
    statusFollow: [
      { id: 'alexGaulet', status: ME },
      { id: 'floChanal', status: FOLLOWING },
      { id: 'marvinGaulet', status: FOLLOWING },
    ],
  };
  const enzoRiki = {
    id: 'enzoRiki',
    picture: '/img/blue.jpg',
    name: 'Enzo',
    lastName: 'Riki',
    statusFollow: [{ id: 'floChanal', status: FOLLOWING }],
  };
  
const initialState = {
    myProfile: floChanal,
    otherProfile: { alexGaulet, floChanal, marvinGaulet, enzoRiki },
  };

  const initialState2 = {
    myProfile: alexGaulet,
    otherProfile: { alexGaulet, floChanal, marvinGaulet, enzoRiki },
  };

export const stateProfile = { type: PROFILE.initialStateProfile, state: initialState }
export const stateProfile2 = { type: PROFILE.initialStateProfile, state: initialState2 }