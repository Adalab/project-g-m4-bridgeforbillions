import RJSON from 'relaxed-json';

const ENDPOINT = 'http://www.mocky.io/v2/5d8c8f842e00002f05abdac1';

const careerPath = () => fetch(ENDPOINT)
  .then((response) => response.text())
  .then((text) => RJSON.parse(text))
  .then((data) => {
    const categories = Object.values(data).sort((a, b) => a.category.localeCompare(b.category));
    return categories;
  });


export default careerPath;
