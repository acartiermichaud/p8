// React component
import {useState} from 'react';

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

      <p className='collapse_content' opened={isOpen ? "true" : "false"}>{collapseTxt}</p>
      
    </div>
  )
}
  
export default Collapse