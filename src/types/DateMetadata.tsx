import { YearMetadata } from './YearMetadata';


export interface DateMetadata {
  [year: number]: YearMetadata,
  count: number,
}
