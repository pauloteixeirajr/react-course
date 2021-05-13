const fetch = require('node-fetch');
const swapi = require('./async');

describe('SWAPI tests', () => {
  it('should call swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
