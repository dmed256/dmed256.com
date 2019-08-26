import { styled } from '@material-ui/core/styles';

import constants from './constants';


const Bold = styled('span')({
  color: '#19a98a',
  fontWeight: 400,
  [constants.media.print]: {
    color: 'inherit',
  },
});

export default Bold;
