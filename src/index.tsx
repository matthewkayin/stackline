import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { ProductPage } from './pages';
import { Banner } from './components';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Banner />
      <ProductPage />
    </BrowserRouter>
  </React.StrictMode>
);