import axios from 'axios';

export const searchGifsAPI = async (query?: string) => {
  const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${import.meta.env.VITE_API_KEY}&limit=10`);
  return data.data;
};
