import { useEffect, useState } from "react";
import { getData } from "../hook/getData";
import { useParams } from "react-router-dom";

const DonationCampaignPage = () => {
  const [data, setData] = useState([]);
  let id = useParams();

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);


  const filteredData = data.filter((singleData) => singleData.id == parseInt(id.id));
  console.log(filteredData)

  return (
    <div className="pb-10">
      {filteredData.map((singleCampaign) => (
        <div className="campaign-container" key={singleCampaign.id}>
          <div className="image-container relative">
            <img
              src={singleCampaign.image}
              alt="campaign-image"
              className="w-full h-[70vh] object-cover rounded-lg"
            />
             <div className="donate-cta p-4 lg:p-3 absolute bottom-0 w-full bg-gradient-to-r from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.7)]">
              <button
                className={`bg-[${singleCampaign.text_color}] text-white px-3 py-2 rounded-lg`}
           
              >
               You have donated in this campaign! 
              </button>
            </div>
          </div>
        <div className="content mt-10 space-y-8">
        <h1 className="text-3xl font-bold">{singleCampaign.title}</h1>
        <p className="text-[#0B0B0B90]">{singleCampaign.description}</p>
        </div>
         
        </div>
      ))}
    </div>
  );
};

export default DonationCampaignPage;
