import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css';
import './styles/Header.css';
import './styles/TopPage.css';
import './styles/StoragePage.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
