const baseUrl = 'https://www.metmuseum.org/-/media/images/about-the-met/collection-areas';
const imageCollection = [
  {
    departmentId: 1,
    imageUrl: 'aaoa/promos/ancient-america-700.jpg',
  },
  {
    departmentId: 3,
    imageUrl: 'ancient-near-east/ane_teaser.jp',
  },
  {
    departmentId: 4,
    imageUrl: 'arms-and-armor/arms-and-armor_teaser.jpg',
  },
  {
    departmentId: 5,
    imageUrl: 'aaoa/promos/oceania-700.jpg',
  },
  {
    departmentId: 6,
    imageUrl: 'asian-art/asian_art_teaser_for_curatorial_depts_page.jpg',
  },
  {
    departmentId: 7,
    imageUrl: 'aaoa/promos/africa-700-.jpg',
  },
  {
    departmentId: 8,
    imageUrl: 'costume-institute/ci_teaser_700x440.jpg',
  },
  {
    departmentId: 9,
    imageUrl: 'drawings-and-prints/zodiac-department-page/teaser_700x440.jpg',
  },
  {
    departmentId: 10,
    imageUrl: 'egyptian/egyptian_art_teaser.jpg',
  },
  {
    departmentId: 11,
    imageUrl: 'european-paintings/zodiac-department-page/european_paintings_teaser.jpg',
  },
  {
    departmentId: 12,
    imageUrl: 'esda/esda_teaser.jpg',
  },
  {
    departmentId: 13,
    imageUrl: 'greek-and-roman/greek_roman_teaser_700x440.jpg',
  },
  {
    departmentId: 14,
    imageUrl: 'islamic/islamic_teaser.jpg',
  },
  {
    departmentId: 15,
    imageUrl: 'robert-lehman/lehman_teaser.jpg',
  },
  {
    departmentId: 16,
    imageUrl: 'american-wing/the-american-wing-court_teaser.jpg',
  },
  {
    departmentId: 17,
    imageUrl: 'medieval-art/medieval_teaser.jpg',
  },
  {
    departmentId: 18,
    imageUrl: 'musical-instruments/musicalinstruments_teaser.jpg',
  },
  {
    departmentId: 19,
    imageUrl: 'photographs/new-photographs-teaser.jpg',
  },
  {
    departmentId: 21,
    imageUrl: 'modern/modcon_teaser_parapivot_700x440.jpg',
  },
];

const getImage = (id) => {
  const department = imageCollection.find((dep) => dep.departmentId === id);
  return `${baseUrl}/${department.imageUrl}`;
};

export default getImage;
