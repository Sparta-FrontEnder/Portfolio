import './HolidayCards.css'
const HolidayCards = ({src, title, desc}) => {
  return (
    <div className='card'>
        <img className = 'card-img' src={src} alt="Holiday Picture" />
        <div className='card-body'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-desc'>{desc}</p>
        </div>
    </div>
  )
}

export default HolidayCards
