import { useEffect, useState } from "react";
import { getData } from "../hook/getData";
import { useParams } from "react-router-dom";

const CampaignPage = () => {
  const [data, setData] = useState([]);
  let id = useParams();

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  const handleDonate = () => {
    let donatedCampaignArray = [];
    let localItems = JSON.parse(localStorage.getItem("id")) || [];
    if (localItems.includes(id.id)) {
      return alert("added");
    }
    if (!localItems) {
      donatedCampaignArray.push(parseInt(id.id));
      localStorage.setItem("id", JSON.stringify(donatedCampaignArray));
    } else {
      donatedCampaignArray.push(...localItems, parseInt(id.id));
      localStorage.setItem("id", JSON.stringify(donatedCampaignArray));
      console.log(localItems);
    }
  };

  const filteredData = data.filter((singleData) => singleData.id == id.id);

  return (
    <div>
      {filteredData.map((singleCampaign) => (
        <div className="campaign-container" key={singleCampaign.id}>
          <p>{singleCampaign.title}</p>
          <button className="bg-red-300 p-3" onClick={handleDonate}>
            Donate
          </button>
        </div>
      ))}
    </div>
  );
};

export default CampaignPage;
