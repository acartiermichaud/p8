// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'

// Style
import '../../styles/error-page.scss'


function Error() {
  return (
    <div className='error-page'>
      <Header homeLink='header_not-selected-link' aProposLink='header_not-selected-link'/>

      <h1 className='error-page_title'>404</h1>
      <p className='error-page_txt'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='error-page_link' to='/'>Retourner sur la page d'accueil</Link>
        
    </div>
  )
}
  
export default Error