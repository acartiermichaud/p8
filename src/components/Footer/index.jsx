// Style
import '../../styles/footer.scss'

// Image
import footerLogo from '../../assets/footer-logo.png'


function Footer() {
  return (
    <div className='footer'>
        <img className='footer_logo' src={footerLogo} alt='Logo de Kasa'/>
        <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer