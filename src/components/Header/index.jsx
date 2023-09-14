import {Link} from 'react-router-dom'
import '../../styles/header.scss'
import HomeLogo from '../../assets/home-logo.png'


function Header() {
    return (
      <div>
        <Link to="/">
          <img src={HomeLogo} alt="Logo de Kasa"/>
        </Link>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A Propos</Link>
        </div>
      </div>
    )
  }
  
  export default Header