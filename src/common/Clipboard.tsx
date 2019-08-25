import React from 'react';
import ClipboardJS from 'clipboard';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SlideTransition from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';


const styles = createStyles({
  root: {
    display: 'inherit',
    cursor: 'pointer',
  },
  snackbarIcon: {
    color: 'white',
  },
});

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode,
  clipboardText: string,
  tooltip: string,
  snackbarMessage: string,
}

interface State {
  snackbarOpened: boolean,
}

class Clipboard extends React.Component<Props, State> {
  state: State = {
    snackbarOpened: false,
  }

  ref = React.createRef<any>();
  clipboard: any = null;

  openSnackbar = () => {
    this.setState({
      snackbarOpened: true,
    });
  }

  closeSnackbar = () => {
    this.setState({
      snackbarOpened: false,
    });
  }

  componentDidMount() {
    this.clipboard = new ClipboardJS(this.ref.current, {
      text: () => this.props.clipboardText,
    });
  }

  render() {
    const {
      classes,
      tooltip,
      snackbarMessage,
      children,
    } = this.props;
    const {
      snackbarOpened,
    } = this.state;

    const snackbarAction = (
      <IconButton
        className={classes.snackbarIcon}
        onClick={this.closeSnackbar}
      >
        <ClearIcon />
      </IconButton>
    );

    return (
      <React.Fragment>
        <Tooltip
          title={tooltip}
          placement="bottom"
        >
          <div
            ref={this.ref}
            className={classes.root}
            onClick={this.openSnackbar}
          >
            {children}
          </div>
        </Tooltip>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={snackbarOpened}
          message={snackbarMessage}
          action={snackbarAction}
          TransitionComponent={SlideTransition as any}
          TransitionProps={{
            direction: 'up',
          } as any}
          onClose={this.closeSnackbar}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Clipboard);
