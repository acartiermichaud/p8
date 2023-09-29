// React
import {useEffect, useState} from 'react';

// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/slideshow.scss'

// Images
import arrow_forward from '../../assets/arrow_forward.png'
import arrow_back from '../../assets/arrow_back.png'


function Slideshow({pictures}) {
  const total = pictures.length

  let [position, setPosition] = useState(0)
  let oldPosition = 0

  let [mvt, setMvt] = useState("none")


  function calcPosition (direction) {
    oldPosition = position
    
    if (direction === "forward") {
      if (position === total-1) {
        position = 0
      }
      else {
        position += 1
      }
    }
    if (direction === "back") {
      if (position === 0) {
        position = total-1
      }
      else {
        position -= 1
      }
    }
    return position
  }

  useEffect (() => {
    setMvt("none")
  }, [])


  return (
    <div className='slideshow'>

      {total > 1 && <img className='slideshow_arrow slideshow_arrow_forward' src={arrow_forward} alt="Suivante" onClick={() => {setPosition(calcPosition("forward")); setMvt("forward");}}></img>}
      {total > 1 && <img className='slideshow_arrow slideshow_arrow_back' src={arrow_back} alt="Précédente" onClick={() => {setPosition(calcPosition("back")); setMvt("back");}}></img>}

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