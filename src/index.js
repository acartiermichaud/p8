// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import APropos from './pages/APropos'
import Logement from './pages/Logement'
import Error from './pages/Error'

// Components
import Footer from './components/Footer'

// Style
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='page-contener'>
        <div className='page'>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />}/>
            <Route path="/a-propos" element={<APropos />} errorElement={<Error />}/>
            <Route path="/logement" element={<Logement />} errorElement={<Error />}/>
            <Route path="*" element={<Error />} errorElement={<Error />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);