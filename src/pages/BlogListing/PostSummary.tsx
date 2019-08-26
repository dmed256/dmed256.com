import React from 'react';


interface Props {
  title: string,
  filename: string,
  date: string,
  minutesToRead: number,
  summary: string,
};

const PostSummary = ({
  title,
  filename,
  date,
  minutesToRead,
  summary,
}: Props) => (
  <div>PostSummary</div>
);

export default PostSummary;
