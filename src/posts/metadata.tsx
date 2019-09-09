import moment from 'moment';

import * as types from '../types';
import posts from './posts';


const tagMetadata: types.TagMetadata = {};
const dateMetadata: types.DateMetadata = {
  count: 0,
};

// Compute date metadata
posts.forEach(({ date }) => {
  const mDate = moment(date);
  const year = mDate.year();
  const month = mDate.month();

  if (!(year in dateMetadata)) {
    dateMetadata[year] = {
      count: 0,
    };
  }

  const yearMetadata = dateMetadata[year] as types.YearMetadata;
  if (!(month in yearMetadata)) {
    yearMetadata[month] = 0;
  }

  dateMetadata.count++;
  yearMetadata.count++;
  yearMetadata[month]++;
});

// Compute tag metadata
posts.forEach(({ tags }) => {
  tags.forEach((tag) => {
    if (!(tag in tagMetadata)) {
      tagMetadata[tag] = 0;
    }
    tagMetadata[tag]++;
  });
});

export default {
  tag: tagMetadata,
  date: dateMetadata,
}
