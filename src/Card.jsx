

function Card({title, desc, img, onClick}){
    return(
        <div className='card-div' onClick={onClick}>
            <img src={img} alt='movie poster' className='card-img'></img>
            <h2 className='card-title'>{title}</h2>
            <div className='card-desc'><p className="card-desc-text">{desc}</p></div>
        </div>
    );
}

export default Card;