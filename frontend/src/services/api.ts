import axios from 'axios';

const url = 'http://localhost:3333/api';

export const api = axios.create({
  baseURL: url,
});
