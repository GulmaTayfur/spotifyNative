import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const ArtsitsContext = createContext();

export const ArtistsProvider = ({children}) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArtists = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye de popüler',
        type: 'artists',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'a40479d2b8mshc4b883a4f9191d1p1d92b1jsn4316bb916aee',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      const data = response.data.artists.items;
      setArtists(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getArtists();
  }, []);

  return (
    <ArtsitsContext.Provider value={{artists, loading, error}}>
      {children}
    </ArtsitsContext.Provider>
  );
};
