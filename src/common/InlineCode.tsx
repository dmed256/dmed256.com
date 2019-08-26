import { styled } from '@material-ui/core/styles';

import constants from './constants';


const InlineCode = styled('span')(({ theme }) => ({
  margin: '0 0.08em',
  padding: 0,
  color: theme.palette.secondary.main,
  backgroundColor: 'transparent',
  fontSize: '0.9em',
  fontFamily: "'Ubuntu Mono', monospace",
  fontWeight: 300,
  [constants.media.print]: {
    color: 'inherit',
  },
}));

export default InlineCode;
