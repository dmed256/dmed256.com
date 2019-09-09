import * as types from '../types';


const DUMMY_SUMMARY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue purus ut turpis tristique fringilla. Phasellus sem mi, egestas non tortor et, pretium ultricies erat. Nulla elementum ipsum id metus euismod, ut ultrices urna eleifend. Aliquam condimentum arcu faucibus tellus tristique porttitor.';

const DUMMY_COMPONENT = () => null;

const posts: types.PostSummary[] = [
  {
    title: "Title 1",
    date: "2019-09-07",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'React', 'Redux'],
    component: DUMMY_COMPONENT,
  },
  {
    title: "Title 2",
    date: "2019-09-10",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'JSS', 'Styling'],
    component: DUMMY_COMPONENT,
  },
  {
    title: "Title 3",
    date: "2019-10-10",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Typescript'],
    component: DUMMY_COMPONENT,
  },
  {
    title: "Title 4",
    date: "2019-09-10",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['C++', 'GPU'],
    component: DUMMY_COMPONENT,
  },
];

export default posts;
