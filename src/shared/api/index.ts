import axios from 'axios';

export const searchGifsAPI = async (query?: string) => {
  const { data } = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
      import.meta.env.VITE_API_KEY
    }&limit=10`
  );
  return data.data;
};

export const getTrendingSearches = async () => {
  const { data } = await axios.get(
    `https://api.giphy.com/v1/trending/searches?api_key=${import.meta.env.VITE_API_KEY}`
  );
  return data.data;
};
