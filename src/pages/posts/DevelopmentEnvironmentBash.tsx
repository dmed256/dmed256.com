import React from 'react';
import moment from 'moment';

import * as types from '../../types';


const Page = () => (
  <div>
    hi
  </div>
);


const postSummary: types.PostSummary = {
  title: 'Development Environment: Bash',
  slug: 'development-environment-bash',
  date: moment('2020-02-10'),
  minutesToRead: 10,
  tags: ['Bash'],
  component: Page,
};

export default postSummary;
