import axios from 'axios';

const ENDPOINT = 'https://www.mocky.io/v2/5d92479b310000e08410ceab';

const careerPath = () => axios.get(ENDPOINT).then((response) => response.data);

export default careerPath;
