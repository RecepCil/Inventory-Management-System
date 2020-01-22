import axios from 'axios';

const BASE_URI = "http://localhost:3001";

export default function getRequest(endpoint) {
     return axios.get(`${BASE_URI}/${endpoint}`).then()
}