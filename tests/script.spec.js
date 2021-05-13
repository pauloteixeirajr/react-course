const googleSearch = require('./script');

const dbMock = ['dog.com', 'cheese.com', 'dogpictures.com'];

it('should return 10', () => {
  expect(5 + 5).toBe(10);
});

it('should return an empty list', () => {
  expect(googleSearch('test', dbMock)).toEqual([]);
});

it('should return two items dogs websites', () => {
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});
