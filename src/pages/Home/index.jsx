// React Router
//import { useNavigate } from 'react-router';

// React component
import {Link} from 'react-router-dom'
//import { useEffect } from 'react';

// Components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// Style
import '../../styles/home-page.scss'

// Image
import image from '../../assets/home-img.png'

// Data
import accomodations from '../../data/logements.json'



function Home() {
  // let navigate = useNavigate()
  // let isKnown
  
  // function checkId (unknownId) {
  //   const length = accomodations.filter(({id}) => unknownId === id).length
  //   if (length === 1) {
  //     isKnown = true
  //   }  
  //   else {
  //     isKnown = false
  //   }
  // }

  // useEffect (() => 
  //   {if (isKnown) {
  //     console.log("OK")
  //     navigate(`/logement/${unknownId}`)
  //   }
  //   else {
  //     console.log("Error")
  //     navigate('/error')
  //   }}, [isKnown])

  return (
    <div className='home-page'>
      <Header homeLink='header_selected-link' aProposLink='header_not-selected-link'/>

      <Banner url={image} alt='Mer au pied des rochers' title='Chez vous, partout et ailleurs'/>

      <div className='accommodations'>
        {accomodations.map(({id, title, cover}) =>
          <Link key={id} to={`/logement/${id}`}>
            <Card url={cover} alt={title} title={title}/>
          </Link>
        )}
      </div>
      
    </div>
  )
}
  
export default Home