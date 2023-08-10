import '../style/Card.css';

const Card = (props) => {
    return(
        <div className='card'>
            <h2 className='card-title'>{props.data.title}</h2>
            <h5 className='card-description'>{props.data.description}</h5>
            <div className='card-bottom'>
                <button className='card-url'>
                    <a target="blank" href={props.data.url}>Read</a>
                </button>
                <div className='card-footer'>
                    <span className='card-source'>{props.data.source}, </span>
                    <span className='card-date'> {props.data.published_at.substring(0, props.data.published_at.lastIndexOf(':')).replace('T', ' ')}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;