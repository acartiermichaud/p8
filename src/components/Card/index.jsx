// Style
import '../../styles/card.scss'


function Card ({url, alt, title}) {
    return (
      <div className='card'>
        <img className='card_image' src={url} alt={alt}></img>
        <div className='card_gradient'></div>
        <h1 className='card_title'>{title}</h1>
      </div>
    )
  }
  
export default Card