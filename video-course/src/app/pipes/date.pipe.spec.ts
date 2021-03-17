import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  const pipe = new DatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform the date "03-15-2021" to view "Mon Mar 15 2021"', () => {
    expect(pipe.transform('03-15-2021')).toEqual('Mon Mar 15 2021');
  });
});
