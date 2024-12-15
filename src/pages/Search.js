import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";

export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search for ${queryTerm}`);

  return (
    <main>
      <section>
        <p className="text-left text-3xl text-gray-700 dark:text-white">
          {movies.length === 0 ? `Result: No result found for ${queryTerm}` : `Result: ${movies.length} found for "${queryTerm}"` }
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          {movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
