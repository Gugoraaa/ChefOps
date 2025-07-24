import Clock from "./Clock";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="relative bg-gray-800 py-6  shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        <h1 className="text-white text-2xl font-bold z-10">ChefOps</h1>

        <div className=" right -translate-x-1/2">
          <Clock />
        </div>

        {/* <ul className="flex space-x-6 z-10">
          <li>
            <Link to="/all" className="text-white hover:text-teal-300">
              All
            </Link>
          </li>
          <li>
            <Link to="/cooking" className="text-white hover:text-teal-300">
              Cooking
            </Link>
          </li>
          <li>
            <Link to="/queue" className="text-white hover:text-teal-300">
              Queue
            </Link>
          </li>
          <li>
            <Link to="/completed" className="text-white hover:text-teal-300">
              Completed
            </Link>
          </li>
          <li>
            <Link to="/canceled" className="text-white hover:text-teal-300">
              Canceled
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
