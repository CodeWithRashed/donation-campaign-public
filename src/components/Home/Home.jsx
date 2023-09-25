import { useEffect, useState } from "react";
import Banner from "./Banner";
import ProjectCard from "./ProjectCard";
import { getData } from "../../hook/getData";
const Home = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    getData()
    .then((result) => {
      setData(result)
    })
  }, [])
  return (
    <div>
      <Banner></Banner>
      <div className="card-container grid grid-cols-4 gap-8 py-20">
        {data.map((donationProject) => (
          <ProjectCard
            key={donationProject.id}
            data={donationProject}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
