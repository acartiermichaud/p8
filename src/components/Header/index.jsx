// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/header.scss'

// Image
import homeLogo from '../../assets/home-logo.png'


function Header ({homeLink, aProposLink}) {
  
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src={homeLogo} alt='Logo de Kasa'/>
      </Link>
      <div className='header_nav'>
        <Link className={homeLink} to='/'>Accueil</Link>
        <Link className={aProposLink} to='/a-propos'>A Propos</Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  homeLink: PropTypes.string,
  aProposLink: PropTypes.string
}

export default Header