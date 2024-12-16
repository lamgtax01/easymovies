import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
  <footer className="bottom-0 bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">MyEasyMovies</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <NavLink href="#" className="hover:underline me-4 md:me-6">About</NavLink>
          </li>
          <li>
              <NavLink href="#" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/lambert-dongfack-691ba022/" target='_blank' rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
              <NavLink href="https://www.linkedin.com/in/lambert-dongfack-691ba022/" target='_blank' rel="noopener noreferrer" className="hover:underline">Contact</NavLink>
          </li>
        </ul>
      </div>
  </footer>
  )
}
