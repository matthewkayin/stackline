import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { ProductPage } from './pages';
import { Banner } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Banner />
    <ProductPage />
  </React.StrictMode>
);