import React from 'react';
import { Moment } from 'moment';


export interface PostSummary {
  title: string,
  slug: string,
  date: Moment,
  minutesToRead: number,
  tags: string[],
  component: React.ReactType,
}
