const googleDatabase = [
  'cats.com',
  'soup.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
];

const googleSearch = searchInput => {
  return googleDatabase
    .filter(website => website.includes(searchInput))
    .slice(0, 3);
};

googleSearch('cat');
