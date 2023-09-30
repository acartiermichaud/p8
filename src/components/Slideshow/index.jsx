// React
import {useState} from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/slideshow.scss'

// Images
import arrow_forward from '../../assets/arrow_forward.png'
import arrow_back from '../../assets/arrow_back.png'


function Slideshow ({pictures}) {
  
  const total = pictures.length

  let [position, setPosition] = useState(0)
  const [oldPosition, setOldPosition] = useState(0)
  const [mvt, setMvt] = useState("none")


  // Function that calculates the new position in slideshow
  function calcPosition (direction) {
    if (direction === "forward") {
      if (position === total - 1) {
        position = 0
        setOldPosition(total - 1)
      }
      else {
        position += 1
        setOldPosition(position - 1)
      }
    }
    if (direction === "back") {
      if (position === 0) {
        position = total - 1
        setOldPosition(0)
      }
      else {
        position -= 1
        setOldPosition(position + 1)
      }
    }
    return position
  }


  // Function that displays sliding then initializes mvt variable
  function sliding (direction) {
    setMvt(direction)
    setTimeout(() => {setMvt('none')}, 700)
  }
  

  // Function that triggers the slideshow animation
  function handleArrowClick (direction) {
    setPosition(calcPosition(direction))
    sliding(direction)
  }


  return (
    <div className='slideshow'>

      {total > 1 && <img className='slideshow_arrow slideshow_arrow_forward' src={arrow_forward} alt="Suivante" onClick={() => handleArrowClick("forward")}></img>}
      {total > 1 && <img className='slideshow_arrow slideshow_arrow_back' src={arrow_back} alt="Précédente" onClick={() => handleArrowClick("back")}></img>}

      <img className={`slideshow_image slideshow_image_current slideshow_image_current_mvt-${mvt}`} src={pictures[position]} alt="Logement"></img>
      <img className={`slideshow_image slideshow_image_previous slideshow_image_previous_mvt-${mvt}`} src={pictures[oldPosition]} alt="Logement"></img>

      <p className='slideshow_page-numbers'>{total > position && `${position+1}/${total}`}</p>
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Slideshow