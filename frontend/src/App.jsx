import React, { useState, useEffect } from 'react';;
import axios from 'axios';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/')
        .then((response) => {
            setMessage(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
  }, []);

  return (
    <div className='App'>
        <h1>Hello, React without CRA or Vite!</h1>
        <p>{message}</p>
    </div>
  );
}

export default App;
