import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function Movie({id, title, coverImg, summary, genres}){
    return(
        <div key={id}>
            <h2>Title : <Link to={`/movie/${id}`}>{title}</Link></h2>
            <img src={coverImg} alt=""/>
            <h3>Summary</h3>
            <p> {summary}</p>
            <h4>kinds of genres!</h4>
            <ul>
                {genres.map((genre)=>(
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
         </div>
    );
}
export default Movie;
Movie.propTypes={
   id:PropTypes.number.isRequired,
   title:PropTypes.string.isRequired,
   coverImg:PropTypes.string.isRequired,
   summary:PropTypes.string.isRequired,
   genres:PropTypes.arrayOf(PropTypes.string.isRequired)
}
