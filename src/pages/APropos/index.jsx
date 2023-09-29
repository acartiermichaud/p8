// Components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

// Style
import '../../styles/a-propos-page.scss'

// Image
import image from '../../assets/a-propos-img.png'


function APropos () {
  
  return (
    <div className='a-propos-page'>
      <Header homeLink='header_not-selected-link' aProposLink='header_selected-link'/>

      <Banner url={image} alt='Montagnes enneigées' title=''/>

      <div className='collapses-contener'>
        <Collapse 
          collapseTitle="Fiabilité" 
          collapseTxt="Les annonces postées sur Kasa garantisent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        <Collapse 
          collapseTitle="Respect" 
          collapseTxt="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Collapse 
          collapseTitle="Service" 
          collapseTxt="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Collapse 
          collapseTitle="Sécurité" 
          collapseTxt="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    
    </div>
  )
}
  
export default APropos