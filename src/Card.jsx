import { Link } from "react-router-dom";

function Card({id, title, img, onClick, release_date, score}){

    const formatDate = (date) => {
        if (!date) return "Unknown";
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
      };

    return(
        <Link to={`/movie/${id}`}>
            <div className='card-div' onClick={onClick}>
                <img src={img} alt='movie poster' className='card-img'/>
                <div className="card-details">
                    <h2 className='card-title'>{title}</h2>
                    <div className='card-desc'><div className="card-score">{score}</div><div className="card-release-date">{formatDate(release_date)}</div></div>
                </div>
            </div>
        </Link>
    );
}

export default Card;