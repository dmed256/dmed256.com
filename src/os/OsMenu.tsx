import { Divider, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OsMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: 8,
    overflow: 'hidden',
    // y not work?
    // backdropFilter: 'blur(16px)',
    color: 'white',
    backgroundColor: 'rgba(55, 55, 55)',
    border: '1px solid rgba(90, 90, 90)',
  },
  '& .MuiList-root': {
    padding: '3px 3px 3px 3px',
  },
});

export const OsMenuItem = styled(MenuItem)({
  fontSize: 13,
  borderRadius: 4,
  paddingLeft: 20,
  paddingTop: 2,
  paddingBottom: 2,
  '&:hover': {
    backgroundColor: '#2f64e1',
  },
});

export const OsMenuDivider = styled(Divider)({
  borderColor: 'rgba(90, 90, 90)',
  margin: '4px 10px !important',
});
