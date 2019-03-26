import Axios from 'axios';

let axios = Axios.create({
  baseURL: 'http://localhost:3000/api/'
});

export function fetchFromDB(path, setState) {
  axios
    .get(`${path}`)
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => {});
}

export function postToDB(path, data) {
  axios
    .post(`${path}`, data)
    .then(({ data }) => {})
    .catch((err) => {});
}
