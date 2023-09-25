import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [inHome, setInHome] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setInHome(true);
    } else {
      setInHome(false);
    }
  }, [location.pathname]);
  return (
    <div className="">
      {inHome ? (
        <div className="relative">
          <div className="bg-overly absolute -z-10 w-full opacity-5">
            <img
              src="https://i.postimg.cc/Ssm2T2H4/Rectangle-4281.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="content">
            <Nav></Nav>
            <Outlet></Outlet>
          </div>
        </div>
      ) : (
        <div className="">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
