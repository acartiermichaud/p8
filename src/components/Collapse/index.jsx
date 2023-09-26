// React
import {useState} from 'react';

// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/collapse.scss'

// Image
import arrow from '../../assets/arrow.png'


function Collapse({collapseTitle, collapseTxt}) {
  const [isOpen, setOpening] = useState(false);

  return (
    <div className='collapse'>
      <div className='collapse_header'>
          <h1 className='collapse_title'>{collapseTitle}</h1>
          
          <div className='collapse_button' opened={isOpen ? "true" : "false"} onClick={() => {isOpen ? setOpening(false) : setOpening(true)}}>
            <img className='collapse_arrow' src={arrow} alt='clickable arrow'/>
          </div>   
      </div>

      <div className='collapse_content' opened={isOpen ? "true" : "false"}>{collapseTxt}</div>
      
    </div>
  )
}

Collapse.propTypes = {
  collapseTitle: PropTypes.string,
  collapseTxt: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}
  
export default Collapse