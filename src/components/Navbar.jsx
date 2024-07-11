import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <>
      <nav className=" border-b border-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-16 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block  text-1xl font-bold ml-2">MY REACT JOB BOARD</span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={linkClass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={linkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
