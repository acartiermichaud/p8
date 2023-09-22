// React
import React, {useState} from 'react';

// React component
import {Link} from 'react-router-dom'

// Style
import '../../styles/slideshow.scss'

// Images
import arrow_forward from '../../assets/arrow_forward.png'
import arrow_back from '../../assets/arrow_back.png'


function Slideshow({pictures}) {
  const total = pictures.length
  const [position, setPosition] = useState(1);

  return (
    <div className='slideshow'>
        <img className='slideshow_image' src={pictures[position-1]} alt="Logement"></img>

        {total > 1 && <Link onClick={() => setPosition(position===total ? 1 : position + 1)}><img className='slideshow_arrow slideshow_arrow_forward' src={arrow_forward} alt="Suivante"></img></Link>}
        {total > 1 && <Link onClick={() => setPosition(position===1 ? total : position - 1)}><img className='slideshow_arrow slideshow_arrow_back' src={arrow_back} alt="Précédente"></img></Link>}
        <p className='slideshow_page-numbers'>{total >= position && `${position}/${total}`}</p>
    </div>
  )
}

export default Slideshow