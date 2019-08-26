import { styled } from '@material-ui/core/styles';


const InlineCode = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "'Ubuntu Mono', monospace",
}));

export default InlineCode;
