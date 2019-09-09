import moment from 'moment';


const DUMMY_SUMMARY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue purus ut turpis tristique fringilla. Phasellus sem mi, egestas non tortor et, pretium ultricies erat. Nulla elementum ipsum id metus euismod, ut ultrices urna eleifend. Aliquam condimentum arcu faucibus tellus tristique porttitor.';

const posts = [
  {
    title: "Title 1",
    filename: "foo.md",
    date: "09/07/2019",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'React', 'Redux'],
  },
  {
    title: "Title 2",
    filename: "foo.md",
    date: "09/10/2019",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Javascript', 'JSS', 'Styling'],
  },
  {
    title: "Title 3",
    filename: "foo.md",
    date: "10/10/2019",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['Typescript'],
  },
  {
    title: "Title 4",
    filename: "foo.md",
    date: "09/10/2019",
    minutesToRead: 10,
    summary: DUMMY_SUMMARY,
    tags: ['C++', 'GPU'],
  },
].map(({ date, ...other }) => ({
  date: moment(date, "MM/DD/YYYY"),
  ...other,
}));

export default posts;
