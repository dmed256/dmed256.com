import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import Tag from '../../common/Tag';
import { metadata } from '../../posts';


const DEFAULT_TAGS_DISPLAYED = 5;

const useStyles = makeStyles({
  header: {
    marginBottom: 15,
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px 0',
  },
  count: {
    width: '1em',
    marginRight: '0.5em',
    textAlign: 'right',
  },
  tag: {
    fontSize: '0.8em',
  },
  toggleMessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: '1em',
    textTransform: 'uppercase',
    opacity: 0.7,
  },
  dropdownIcon: {
    marginRight: '0.2em',
  },
});

const TagMetadata = () => {
  const classes = useStyles();
  const [showingAll, setShowingAll] = React.useState<boolean>(false);

  let sortedTags = (
    Object
      .keys(metadata.tag)
      .map((tag) => (
        { tag, count: metadata.tag[tag] }
      ))
      .sort((a, b) => {
        if (a.count !== b.count) {
          return b.count - a.count;
        }
        if (a.tag < b.tag) {
          return -1;
        }
        return (a.tag > b.tag) ? 1 : 0;
      })
  );

  const canToggleTags = (sortedTags.length > DEFAULT_TAGS_DISPLAYED);
  let toggleMessage: React.ReactNode = null;
  if (canToggleTags) {
    if (!showingAll) {
      sortedTags = sortedTags.slice(0, 5);
      toggleMessage = (
        <React.Fragment>
          <ArrowDropDownIcon className={classes.dropdownIcon} />
          Show All
        </React.Fragment>
      );
    } else {
      toggleMessage = (
        <React.Fragment>
          <ArrowDropUpIcon className={classes.dropdownIcon} />
          Show Less
        </React.Fragment>
      );
    }
  }

  return (
    <div>
      <Typography
        className={classes.header}
        variant="h5"
      >
        Tags
      </Typography>
      <div>
        {
          sortedTags.map(({ tag, count }) => (
            <div key={tag} className={classes.tagContainer}>
              <div className={classes.count}>
                {count}
              </div>
              <Tag
                label={tag}
                classes={{ root: classes.tag }}
              />
            </div>
          ))
        }
      </div>
      {toggleMessage && (
        <Typography
          className={classes.toggleMessage}
          variant="body2"
          onClick={() => {
            setShowingAll(!showingAll);
          }}
        >
          {toggleMessage}
        </Typography>
      )}
    </div>
  );
};

export default TagMetadata;
