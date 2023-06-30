import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the backend after successful login
    axios.get('http://localhost:4040/data')
      .then(response => {
        // Set the data in the state
        setData(response.data);
      })
      .catch(error => {
        // Handle errors if the request fails
      });
  }, []);

  return (
    <div>
      <h1>Results</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Results;
