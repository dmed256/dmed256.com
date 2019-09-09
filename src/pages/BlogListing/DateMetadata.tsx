import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  header: {
    marginBottom: 15,
  },
});

const DateMetadata = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.header}
        variant="h5"
      >
        Archive
      </Typography>
    </div>
  );
};

export default DateMetadata;
