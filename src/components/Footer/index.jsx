import '../../styles/footer.scss'
import FooterLogo from '../../assets/footer-logo.png'


function Footer() {
    return (
      <div className='footer'>
          <img src={FooterLogo} alt="Logo de Kasa"/>
      </div>
    )
  }
  
  export default Footer