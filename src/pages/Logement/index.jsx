// React
import {useParams} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

// Style
import '../../styles/logement-page.scss'

// Data
import accomodations from '../../data/logements.json'


function Logement () {

  const selectedId = useParams().id
  const selectedAccomodation = accomodations.filter((accomodation) => accomodation.id === selectedId)[0]


  // Function that check if the id exists in data
  function checkId () {
    if (selectedAccomodation !== undefined) {
      return true
    }
    else {
      return false
    }
  }
  

  return (
    <div>
      {!checkId() && <Navigate to="/error" />}

      {checkId() &&
        <div className='logement-page'>
          <Header homeLink='header_not-selected-link' aProposLink='header_not-selected-link'/>

          <div className='fiche-logement'>

            <div><Slideshow pictures={selectedAccomodation.pictures}/></div>

            <div className='main-contener'>
              <div className='main-contener_left'>
                <h1 className='main-contener_left_title'>{selectedAccomodation.title}</h1>
                <p className='main-contener_left_location'>{selectedAccomodation.location}</p>

                <div className='main-contener_left_tags'>
                  {selectedAccomodation.tags.map((tag) => <Tag key={tag} tagTxt={tag}></Tag>)}
                </div>
              </div>

              <div className='main-contener_right'>
                <Host host={selectedAccomodation.host}></Host>
                <Rating rating={selectedAccomodation.rating}></Rating>
              </div>
            </div>
            
            <div className='collapse-contener'>
              <div className='collapse-contener_column'>
                <Collapse collapseTitle="Description" collapseTxt={selectedAccomodation.description}/>
              </div>
              <div className='collapse-contener_column'>
                <Collapse collapseTitle="Équipements" collapseTxt={selectedAccomodation.equipments.map((equ) => <p className='collapse_equipements' key={equ}>{equ}</p>)}/>
              </div>
            </div>

          </div>
        </div>
      }
    </div>
  )
}
  
export default Logement