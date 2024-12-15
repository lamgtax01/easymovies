import pageNotFoundImage from "../assets/images/pagenotfound.png"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { useTitle } from "../Hooks/useTitle";

export const PageNotFound = () => {

  const pageTitle = useTitle("Page Not found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4 dark:text-white">
          <p className="text-3xl py-3 font-bold">404, Oops! Page not found</p>
          <div className="max-w-lg">
            <img className="rounded-lg" src={pageNotFoundImage} alt="Page not found" />
          </div>
        </div>
        <div className="flex justify-center dark:text-white m-3">
          <Link to="/">
            <Button children="Back to the home"/>
            <Button> Home Page </Button>
          </Link>
        </div>
        <div className="flex justify-center dark:text-white m-3">
          <Link to="movies/popular">
            <button className="w-72 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ">Popular movies</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
