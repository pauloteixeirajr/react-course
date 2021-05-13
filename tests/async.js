const getPeople = async fetch => {
  const api = 'http://swapi.py4e.com/api/people/?format=json';
  const request = await fetch(api);
  const data = await request.json();

  const values = {
    count: data.count,
    results: data.results,
  };

  return values;
};

module.exports = {
  getPeople,
};
