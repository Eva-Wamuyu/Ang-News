import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "None" when the value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('None');
  });

  it('should truncate the value when its length is greater than 70 characters', () => {
    const longValue = 'a'.repeat(90);
    const result = pipe.transform(longValue);
    expect(result).toBe('a'.repeat(90) + '...');
  });

  it('should return the value as is when its length is 70 characters or less', () => {
    const shortValue = 'a'.repeat(70);
    const result = pipe.transform(shortValue);
    expect(result).toBe(shortValue);
  });
});
