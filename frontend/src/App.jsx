import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import StoragePage from './pages/StoragePage';


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
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/storage' element={<StoragePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
