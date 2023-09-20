// Style
import '../../styles/banner.scss'


function Banner ({url, alt, title}) {
  return (
    <div className='banner'>
      <img className='banner_image' src={url} alt={alt}></img>
      <div className='banner_darken'></div>
      <h1 className='banner_title'>{title}</h1>
    </div>
  )
}
  
export default Banner