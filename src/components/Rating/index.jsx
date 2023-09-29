// PropTypes
import PropTypes from 'prop-types'

// Style
import '../../styles/rating.scss'

// Images
import starOrange from '../../assets/star-orange.png'
import starGrey from '../../assets/star-gray.png'


function Rating ({rating}) {

  // Function that creates a schematic list of the rating
  function ratingList (propRating) {
    let rating = propRating.rating
    let ratingList = [[0,0],[1,0],[2,0],[3,0],[4,0]]

    for (let i=0; i<rating; i++) {
      ratingList[i][1] = 1
    }
    return ratingList
  }


  return (
    <div className='rating'>
      {ratingList({rating}).map(([i,j]) => 
        j===1 ? <img key={i} className='rating_star' src={starOrange} alt="Étoile orange"></img> : <img key={i} className='rating_star' src={starGrey} alt="Étoile grise"></img>)}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string
}
  
export default Rating