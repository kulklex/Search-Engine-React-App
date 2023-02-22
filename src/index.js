import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Results from './components/Results';
import { ResultContextProvider } from './context/ResultContextProvider';
import OutLet from './components/OutLet';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ResultContextProvider> 
  <BrowserRouter>
  <OutLet>
    <Routes>
      <Route path='/' element={<Navigate to='/search'/>}/>
      <Route path='/search' element={<Results/>}/>
      <Route path='/imagesearch' element={<Results/>}/>
      <Route path='/videos' element={<Results/>}/>
    </Routes>
  </OutLet>
  </BrowserRouter>
</ResultContextProvider>)
