import RJSON from 'relaxed-json';

const ENDPOINT = 'https://www.mocky.io/v2/5d9375f530000078001b752a';

const careerPath = () => fetch(ENDPOINT)
  .then((response) => response.text())
  .then((text) => RJSON.parse(text))
  .then((data) => {
    const categories = Object.values(data).sort((a, b) => a.category.localeCompare(b.category));
    return categories;
  });


export default careerPath;
