import { Link } from "react-router";
import Clyvs from "../assets/clyvs5.png";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-4 gap-3">

        {/* Logo */}
        <img
          src={Clyvs}
          alt="Clyvs Logo"
          className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full object-cover bg-white"
        />

        {/* Title */}
        <h1 className="text-sm sm:text-xl md:text-3xl font-bold text-green-500 bg-white px-2 sm:px-4 py-2 rounded-lg shadow-md text-center">
          Clyvs Motorcycle Shop
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-2 md:gap-4 lg:gap-6 text-xs sm:text-base md:text-lg">
            <li>
              <Link 
                to="/"
                className="hover:text-green-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/about"
                className="hover:text-green-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/contact"
                className="hover:text-green-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}