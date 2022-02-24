import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
function Detail(){
    const [loading, setLoading]=useState(true);
    const [movieyear, setMovieyear]=useState(0);

    const {id}=useParams();
    const getMovie = async ()=>{
        const json= await (
          fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieyear(json.year);
        setLoading(false);
        console.log(movieyear);
    };
  
    useEffect(()=>getMovie,[]);
    return(
        <div>
        {loading ? ( 
        <h1>Loading...</h1>
        )  : (
            <h1>Details</h1>
        )}
        </div>
        );
}
export default Detail;
