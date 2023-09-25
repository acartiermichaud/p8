// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/tag.scss'


function Tag({tagTxt}) {

  return (
    <div className='tag'>
      <p className='tag_txt'>{tagTxt}</p>
    </div>
  )
}

Tag.propTypes = {
  tagTxt: PropTypes.string
}
  
export default Tag