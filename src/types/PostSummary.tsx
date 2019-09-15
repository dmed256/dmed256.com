import React from 'react';
import { Moment } from 'moment';


export interface PostSummary {
  title: string,
  date: Moment,
  minutesToRead: number,
  summary: string,
  tags: string[],
  component: React.ReactType,
}
