import React from 'react';


export default interface PostSummary {
  title: string,
  date: string,
  minutesToRead: number,
  summary: string,
  tags: string[],
  component: React.ReactType,
}
