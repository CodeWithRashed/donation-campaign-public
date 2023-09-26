import { useEffect, useState } from "react";
import Banner from "./Banner";
import ProjectCard from "./ProjectCard";
import { getData } from "../../hook/getData";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchData, serSearchData] = useState("");
  useEffect(() => {
    getData().then((result) => {
      setData(result);
      setDisplayData(result);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setDisplayData(data);
    if (!event.target.value == "") {
      serSearchData(event.target.value.toLowerCase());
    }
    serSearchData(event.target.value.toLowerCase())
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setDisplayData(data);
    if (!searchData == "") {
      let updateData = data.filter((data) =>
        searchData.includes(data.category.toLowerCase())
      );
      setDisplayData(updateData);
    }else{
      return toast.error("Search can't be empty", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }

  };

  return (
    <div>
      <ToastContainer />
      <Banner handleSearch={handleSearch} handleChange={handleChange}></Banner>
      <div className="card-container grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 ">
        {displayData.map((donationProject) => (
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
