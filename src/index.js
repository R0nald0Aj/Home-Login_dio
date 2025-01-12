import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/style'
import { BrowserRouter as Router, Routes, Route } from "react-router";

import App from './Page/App';
import Login from './Page/Login';
import Feed from './Page/Feed';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GlobalStyle/>
    <Router>
        <Routes>
           <Route path='/' element={<App />}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/feed' element={<Feed/>} />  
         </Routes>  
    </Router>
    
  
  </React.StrictMode>
);

