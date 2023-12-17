// React Router
import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import APropos from '../../pages/APropos'
import Logement from '../../pages/Logement'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'

// Style
import '../../styles/my-router.scss'


function MyRouter () {
  
  return (
    <Router>
      <HashRouter basename="/">
        <div className='page-contener'>
          <div className='page'>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<Error />}/>
              <Route path="/a-propos" element={<APropos />} errorElement={<Error />}/>
              <Route path="/logement/:id" element={<Logement />} errorElement={<Error />}/>
              <Route path="/error" element={<Error />} errorElement={<Error />}/>
              {/* <Route path="*" element={<Error />} errorElement={<Error />}/> */}
            </Routes>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </Router>
  )
}
  
export default MyRouter