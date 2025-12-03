import axios from 'axios';

const api ='53514626-0b1a9606e501b3bd45a679ad3';
const baseURL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {
    return axios.get(baseURL, {
        params: {
          key: api,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
      .then(res => res.data);
  }