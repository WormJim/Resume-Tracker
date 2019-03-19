import Axios from 'axios';

let axios = Axios.create({
  baseURL: 'http://localhost/api/'
});

export function fetchFromDB(path, setState) {
  axios
    .get(`${path}`)
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => {});
}
