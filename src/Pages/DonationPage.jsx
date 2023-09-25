import { useEffect, useState } from "react";
import { getData } from "../hook/getData";
import { Link } from "react-router-dom";

const Donation = () => {
  const [data, setData] = useState([]) ;
  const [donatedCamp, setDonatedCamp] = useState([]);


  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
    let campaignIds = JSON.parse(localStorage.getItem("id"));
    setDonatedCamp(campaignIds);

    let totalDonationNeed =  data.reduce((startValue, singleData) => startValue +  parseInt(singleData.donation_amount), 0)
    console.log(totalDonationNeed)

   
    
 
  }, [data]);

  let campaignIds = donatedCamp;
  let donatedCampaign = []
if(donatedCamp){
  donatedCampaign = data?.filter((campaign) =>
  campaignIds.includes(campaign.id),
 
);
}

  return (
  
    <div>
      <div className={`${donatedCamp ? "hidden" : "text-center flex justify-center items-center mt-52"}`}>
      <h1>No Donation Available</h1>
      </div>
      <div key={donatedCampaign.id}  className={`${donatedCamp ? "grid grid-cols-2 gap-8 justify-center items-center" : "hidden"}`}>
      {donatedCampaign.map((donated_campaign) => (
        <div className="container" key={donated_campaign.key}>
          <div
            className={`card-container  bg-[${donated_campaign.card_bg}] rounded-lg flex gap-3`}
          >
            <img src={donated_campaign.image} alt="" />
            <div className={`card p-2 space-y-2 py-4`}>
              <span
                className={`bg-[${donated_campaign.category_bg}] px-2 rounded w-min text-[${donated_campaign.text_color}]`}
              >
                {donated_campaign.category}
              </span>
              <h1 className={`text-[${donated_campaign.text_color}] text-xl`}>
                {donated_campaign.title}
              </h1>
              <p className={`text-[${donated_campaign.text_color}]`}>${donated_campaign.donation_amount}.00</p>
              <Link
                to={`campaign/${donated_campaign.id}`}
                className={`bg-[${donated_campaign.text_color}] text-white w-max py-2 px-3 rounded-lg`}
              >
                <button>View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      
      
    </div>
  );
};

export default Donation;
