// Style
import '../../styles/host.scss'


function Host({host}) {

  return (
    <div className='host'>
      <div className='host_name'>{host.name.split(" ").map((word) => <p key={word}>{word}</p>)}</div>
      <img className='host_picture' src={host.picture} alt={host.name}></img>
    </div>
  )
}
  
export default Host