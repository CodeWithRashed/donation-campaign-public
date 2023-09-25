import { useEffect, useState } from "react";
import { getData } from "../hook/getData";

const Donation = () => {
 const [data, setData] = useState([])
 const [donatedCamp, setDonatedCamp] = useState([])

 useEffect(() => {
getData()
.then((result) => {
  setData(result)
})
let campaignIds = JSON.parse(localStorage.getItem("id")) 
setDonatedCamp(campaignIds)
 },[])


 let campaignIds = donatedCamp

console.log(donatedCamp)
let donatedCampaign = data.filter((campaign) =>campaignIds.includes(campaign.id))
console.log(donatedCampaign)

  return (
    <div>
      {
        donatedCampaign.map((donated_campaign) =>(
          <h1 key={donated_campaign.id}>{donated_campaign.title}</h1>
        ))
      }
      
    </div>
  );
};

export default Donation;
