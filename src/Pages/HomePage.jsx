import { useLoaderData } from "react-router-dom";
import Home from "../components/Home/Home";
const HomePage = () => {
  const data = useLoaderData();

  return (
    <div>
      <Home data={data}></Home>
    
    </div>
  );
};
export default HomePage;
