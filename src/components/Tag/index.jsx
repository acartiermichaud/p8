// Style
import '../../styles/tag.scss'


function Tag({tagTxt}) {

  return (
    <div className='tag'>
      <p className='tag_txt'>{tagTxt}</p>
    </div>
  )
}
  
export default Tag