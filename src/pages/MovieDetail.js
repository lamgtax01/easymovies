import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";
import { useTitle } from "../Hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
    
  useEffect ( () => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=97fb1e5cd337881bd3fe463d2bec6aed`);
      const json = await response.json()
      setMovie(json);
    }
    fetchMovie(params.id);
  }, [] )

  const pageTitle = useTitle(`${movie.title}`);

  const image = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : Backup;

  // console.log(params);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 text-left">
        <div className="max-w-sm">
          <img src={image} alt="movieImage" className="rounded-2xl" />
        </div>
        <div className="max-w-2xl  text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-4">{movie.title}</h1>
          <p className="mb-7">{movie.overview}</p>
          <div>
            { movie.genres ?  (
              <p className="flex flex-wrap gap-2">
                {movie.genres.map( (genre) => (
                  <span className="mr-2 border border-gray-200 rounded p-2 dark:border-gray-600" key={genre.id}>{genre.name}</span>
                ) )}
              </p>
            ) : ""}
          </div>

          <div className="flex items-center m-3">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie.vote_count} reviews</span>
          </div>
          <p className="my-2">
            <span className="mr-2 font-bold">Runtime:</span>
            <span className="my-2">{movie.runtime}</span>
          </p>
          <p className="my-2">
            <span className="mr-2 font-bold">Budget:</span>
            <span className="my-2">{movie.budget}</span>
          </p>
          <p className="my-2">  
            <span className="mr-2 font-bold">Revenue:</span>
            <span className="my-2">{movie.revenue}</span>
          </p>
          <p className="my-2">  
            <span className="mr-2 font-bold">Release Date:</span>
            <span className="my-2">{movie.release_date}</span>
          </p>  
          <p className="my-2">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>        
          </p>  
        </div>
      </section>
    </main>
  )
}
