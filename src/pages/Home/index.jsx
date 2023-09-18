// Components
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// Style
import '../../styles/home-page.scss'

// Image
import image from '../../assets/home-img.png'

// Data
import accomodations from '../../data/logements.json'


function Home() {
    return (
      <div className='home-page'>
        <Banner url={image} alt='Mer au pied des rochers' title='Chez vous, partout et ailleurs'></Banner>

        <div className='accommodations'>
          {accomodations.map(({id, title, cover}) =>
            <Card key={id} url={cover} alt={title} title={title}></Card>
          )}
        </div>
        
      </div>
    )
  }
  
export default Home