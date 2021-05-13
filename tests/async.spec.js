// const fetch = require('node-fetch');
const swapi = require('./async');

describe('SWAPI tests', () => {
  // it('should call swapi to get people', () => {
  //   expect.assertions(2);
  //   return swapi.getPeople(fetch).then(data => {
  //     expect(data.count).toEqual(87);
  //     expect(data.results.length).toBeGreaterThan(5);
  //   });
  // });

  it('should return count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5],
          }),
      })
    );

    expect.assertions(4);
    return swapi.getPeople(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith(
        'http://swapi.py4e.com/api/people/?format=json'
      );
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
