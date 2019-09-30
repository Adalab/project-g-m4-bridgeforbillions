const ENDPOINT = 'https://www.mocky.io/v2/5d8c8f842e00002f05abdac1';

const careerPath = () => fetch(ENDPOINT).then((response) => response);

export default careerPath;
