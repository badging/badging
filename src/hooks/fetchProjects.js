// utils/useFetchData.js
import { useEffect, useState } from 'react';

export function fetchProjects(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          // cache: 'force-cache',
          // next: { revalidate: 180 },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, isLoading, error };
}
