import axios from 'axios';
import { randomInt } from './GeneratorRandomData';

export function fetchRandomJoke() {
  return axios.get('https://api.chucknorris.io/jokes/random');
}

export function fetchRandomAvatarList() {
  const page = randomInt(50)
  return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
}
