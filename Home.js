import {useEffect, useState} from 'react';
import Movie from '../components/Movie';
//영화 정보+링크(페이지 연결)
function Home(){
    const [loading,setLoading]=useState(true);
    const [movielist,setMoivelist]=useState([]);
    const getMovies=async()=>{
        const response=await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=5.5&sort_by=year"
        );
        const json=await response.json();
        setMoivelist(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
         getMovies();
    },[]);

    return(
       <div>
           {loading?<h1>Loading...</h1>:(
               <div>
                 {movielist.map((movie)=>(
                    
                     <Movie
                     key={movie.id}
                     id={movie.id} 
                     title={movie.title}
                     coverImg={movie.medium_cover_image}
                     summary={movie.summary}
                     genres={movie.genres}
                     />
                 ))}
               </div>
           )}
       </div>
    );
}
export default Home;
