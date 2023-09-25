import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar nav-container flex items-center !justify-between py-10 font-bold !px-0">

        <Link to="/" className="navbar-start">
          <img src="https://i.ibb.co/QmYrhjZ/logo.png" alt="logo" className="w-48" />
        </Link>

      <div className="">
        {/* Mobile Navbar Start*/}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

            <div tabIndex={0}
            className="menu dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box space-y-3">
          <div className="w-full">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4"
                  : ""
              }
            >
              Home
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4 "
                  : ""
              }
            >
              Donation
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4 "
                  : ""
              }
            >
              Statistics
            </NavLink>
          </div>
        </div>
   
        </div>
        {/* Mobile Navbar End*/}
        <div className="gap-8 hidden lg:flex">
          <div className="w-full">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4"
                  : ""
              }
            >
              Home
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4 "
                  : ""
              }
            >
              Donation
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-bold underline underline-offset-4 "
                  : ""
              }
            >
              Statistics
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
