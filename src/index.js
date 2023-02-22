import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Results from './components/Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/search' element={<Results/>}/>
      <Route path='/images' element={<Results/>}/>
      <Route path='/news' element={<Results/>}/>
      <Route path='/videos' element={<Results/>}/>
    </Routes>
  </BrowserRouter>
)
