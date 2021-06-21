import axios from 'axios';

export function fetchRandomJoke() {
  return axios.get('https://api.chucknorris.io/jokes/random');
}

export function fetchRandomAvatarList() {
  return axios.get(`https://picsum.photos/v2/list?page=3&limit=20`);
}

