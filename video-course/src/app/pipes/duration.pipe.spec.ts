import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "80" to "1 h 20 min"', () => {
    expect(pipe.transform('80')).toBe('1 h 20 min');
  });

  it('should transform "40" to "4 min"', () => {
    expect(pipe.transform('40')).toBe('40 min');
  });
});
