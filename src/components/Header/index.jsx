// React component
import {Link} from 'react-router-dom'

// Style
import '../../styles/header.scss'

//Image
import HomeLogo from '../../assets/home-logo.png'


function Header() {
    return (
      <div className='header'>
        <Link to='/'>
          <img className='header_logo' src={HomeLogo} alt='Logo de Kasa'/>
        </Link>
        <div className='header_nav'>
          <Link className='header_link header_selected-link' to='/'>Accueil</Link>
          <Link className='header_link' to='/a-propos'>A Propos</Link>
        </div>
      </div>
    )
  }
  
  export default Header