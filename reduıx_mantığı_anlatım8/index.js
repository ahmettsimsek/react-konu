import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// <React.StrictMode> yerine provider kullanıcaz.

// Provider sarmalama işlemi yapar. İçerisine provs geçeceğim storları tüm sayfa üzerinde kullanılmasını sağlayan yapılardır.
