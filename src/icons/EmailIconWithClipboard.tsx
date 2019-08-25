import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Clipboard from '../common/Clipboard';
import GlowySvgIcon from '../common/GlowySvgIcon';
import social from '../common/social';


const EmailIconWithClipboard = (props: any) => {
  return (
    <Clipboard
      clipboardText={`mailto:${social.getEmail()}`}
      tooltip="Click to copy email to clipboard"
      snackbarMessage="Email copied to clipboard"
    >
      <GlowySvgIcon
        Icon={MailOutlineIcon}
        {...props}
      />
    </Clipboard>
  );
};

export default EmailIconWithClipboard;
