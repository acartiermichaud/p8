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
import Header from './components/Header'
import Footer from './components/Footer'

// Style
import './index.scss';

//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='page-contener'>
        <div className='page'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
