const googleSearch = require('./script');

const dbMock = ['dog.com', 'cheese.com', 'dogpictures.com'];

describe('googleSearch tests', () => {
  it('should return 10', () => {
    expect(5 + 5).toBe(10);
  });

  it('should return an empty list', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
  });

  it('should return two items dogs websites', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('should work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('should not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
