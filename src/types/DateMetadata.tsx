import YearMetadata from './YearMetadata';


export default interface DateMetadata {
  [year: number]: YearMetadata,
  count: number,
}
