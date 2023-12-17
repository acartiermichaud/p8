// React Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

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
      <div className='page-contener'>
        <div className='page'>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<Home />} errorElement={<Error />}/>
            <Route path="/a-propos" element={<APropos />} errorElement={<Error />}/>
            <Route path="/logement/:id" element={<Logement />} errorElement={<Error />}/>
            <Route path="/error" element={<Error />} errorElement={<Error />}/>
            {/* <Route path="*" element={<Error />} errorElement={<Error />}/> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
  
export default MyRouter