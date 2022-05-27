const baseUrl = 'https://www.metmuseum.org/-/media/images/about-the-met/collection-areas';
const imageCollection = [
  {
    departmentId: 1,
    imageUrl: 'aaoa/promos/ancient-america-700.jpg',
    count: 18445,
  },
  {
    departmentId: 3,
    imageUrl: 'ancient-near-east/ane_teaser.jp',
    count: 6222,
  },
  {
    departmentId: 4,
    imageUrl: 'arms-and-armor/arms-and-armor_teaser.jpg',
    count: 13614,
  },
  {
    departmentId: 5,
    imageUrl: 'aaoa/promos/oceania-700.jpg',
    count: 12357,
  },
  {
    departmentId: 6,
    imageUrl: 'asian-art/asian_art_teaser_for_curatorial_depts_page.jpg',
    count: 36828,
  },
  {
    departmentId: 7,
    imageUrl: 'aaoa/promos/africa-700-.jpg',
    count: 2339,
  },
  {
    departmentId: 8,
    imageUrl: 'costume-institute/ci_teaser_700x440.jpg',
    count: 31525,
  },
  {
    departmentId: 9,
    imageUrl: 'drawings-and-prints/zodiac-department-page/teaser_700x440.jpg',
    count: 167841,
  },
  {
    departmentId: 10,
    imageUrl: 'egyptian/egyptian_art_teaser.jpg',
    count: 27966,
  },
  {
    departmentId: 11,
    imageUrl: 'european-paintings/zodiac-department-page/european_paintings_teaser.jpg',
    count: 2618,
  },
  {
    departmentId: 12,
    imageUrl: 'esda/esda_teaser.jpg',
    count: 42943,
  },
  {
    departmentId: 13,
    imageUrl: 'greek-and-roman/greek_roman_teaser_700x440.jpg',
    count: 33751,
  },
  {
    departmentId: 14,
    imageUrl: 'islamic/islamic_teaser.jpg',
    count: 15494,
  },
  {
    departmentId: 15,
    imageUrl: 'robert-lehman/lehman_teaser.jpg',
    count: 2586,
  },
  {
    departmentId: 16,
    imageUrl: 'american-wing/the-american-wing-court_teaser.jpg',
    count: 403,
  },
  {
    departmentId: 17,
    imageUrl: 'medieval-art/medieval_teaser.jpg',
    count: 7143,
  },
  {
    departmentId: 18,
    imageUrl: 'musical-instruments/musicalinstruments_teaser.jpg',
    count: 5213,
  },
  {
    departmentId: 19,
    imageUrl: 'photographs/new-photographs-teaser.jpg',
    count: 37235,
  },
  {
    departmentId: 21,
    imageUrl: 'modern/modcon_teaser_parapivot_700x440.jpg',
    count: 14258,
  },
];

const getImage = (id) => {
  const department = imageCollection.find((dep) => dep.departmentId === id);
  return [`${baseUrl}/${department.imageUrl}`, department.count];
};

export default getImage;
