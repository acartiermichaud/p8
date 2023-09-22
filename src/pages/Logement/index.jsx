// React
import { useParams } from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Slideshow from '../../components/Slideshow'

// Style
import '../../styles/logement-page.scss'

// Data
import accomodations from '../../data/logements.json'


function Logement() {
  const selectedId = useParams().id
  const selectedAccomodation = accomodations.filter((accomodation) => accomodation.id === selectedId)[0]

  return (
    <div className='logement-page'>
      <Header homeLink='header_not-selected-link' aProposLink='header_not-selected-link'/>

      <div className='fiche-logement'>

        <Slideshow pictures={selectedAccomodation.pictures} ></Slideshow>

        <h1>{selectedAccomodation.title}</h1>
        <p>{selectedAccomodation.location}</p>

      </div>
      
    </div>
  )
}
  
export default Logement