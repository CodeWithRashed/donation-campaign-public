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
          <div className="bg-overly h-auto absolute -z-10 w-full opacity-5 overflow-hidden">
            <img
              src="https://i.postimg.cc/Ssm2T2H4/Rectangle-4281.png"
              alt=""
              className="w-full h-[85vh] object-cover object-top "
            />
          </div>
          <div className="content px-6 md:px-14 lg:px-20">
            <Nav></Nav>
            <Outlet></Outlet>
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-14 lg:px-20">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
