import { Link } from "react-router";
import Clyvs from "../assets/clyvs5.png";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
       <img
            src={Clyvs}
            alt="Clyvs Logo"
            className="h-32 w-32 rounded-full object-cover bg-white"
          />
          <h1 className="text-3xl font-bold text-green-500 bg-white px-4 py-2 rounded-lg shadow-md">
           Clyvs Motorcycle Shop
        </h1>

        <nav>
  <ul className="flex gap-6 text-lg">
    <li>
      <Link to="/" className="hover:text-red-400 transition">
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-red-400 transition">
        About
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-red-400 transition">
        Contact Us
      </Link>
    </li>
  </ul>
</nav>
      </div>
    </header>
  );
}