import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // 👈 BrowserRouter'ı içeri aktardık

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Uygulamayı yönlendirme özelliği ile sarmalıyoruz */}
    <BrowserRouter basename="/mscolorwebsite">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);