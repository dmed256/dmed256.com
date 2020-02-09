import moment from 'moment';

import * as types from '../types';


const DUMMY_SUMMARY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue purus ut turpis tristique fringilla. Phasellus sem mi, egestas non tortor et, pretium ultricies erat. Nulla elementum ipsum id metus euismod, ut ultrices urna eleifend. Aliquam condimentum arcu faucibus tellus tristique porttitor.';

const DUMMY_COMPONENT = () => null;

const posts: types.PostSummary[] = [
  {
    title: 'Title 1',
    slug: 'title-1',
    date: moment('2019-09-10'),
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'React', 'Redux'],
    component: DUMMY_COMPONENT,
  },
  {
    title: 'Title 2',
    slug: 'title-2',
    date: moment('2019-09-07'),
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'JSS', 'Styling'],
    component: DUMMY_COMPONENT,
  },
  {
    title: 'Title 3',
    slug: 'title-3',
    date: moment('2018-10-10'),
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Typescript'],
    component: DUMMY_COMPONENT,
  },
  {
    title: 'Title 4',
    slug: 'title-4',
    date: moment('2018-09-10'),
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['C++', 'GPU'],
    component: DUMMY_COMPONENT,
  },
];

export default posts;
