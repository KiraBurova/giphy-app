import axios from 'axios';

export const searchGifsAPI = (query?: string) => {
  return axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${import.meta.env.VITE_API_KEY}`);
};
