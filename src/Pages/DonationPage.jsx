import { useEffect, useState } from "react";
import { getData } from "../hook/getData";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donatedCamp, setDonatedCamp] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let campaignIds = JSON.parse(localStorage.getItem("id")) || [];

    getData().then((result) => {
      let filterData = result?.filter((campaign) =>
        campaignIds.includes(campaign.id)
      );
      if (filterData.length > 4) {
        setShowAll(true);
      }
      setDonatedCamp(filterData);
      setDisplayData(filterData.slice(0, 4));
    });
  }, []);
  console.log(displayData);
  const handleShowAll = () => {
    console.log("btn Click");
    setDisplayData(donatedCamp);
    setShowAll(false);
  };

  return (
    <div>
      <div>
        {displayData.length === 0 && (
          <div className="text-xl font-bold my-24 flex justify-center items-center">
            <h1>Sorry! No donations Found.</h1>
          </div>
        )}
      </div>
      <div>
        {displayData.length > 0 && (
          <div>
            <div className="grid lg:grid-cols-2 gap-8 pb-10 justify-center items-center">
              {displayData.map((donated_campaign) => (
                <div className="card-container-main" key={donated_campaign.id}>
                  <div
                    className={`card-container font-bold bg-[${donated_campaign.card_bg}] rounded-lg flex flex-col lg:flex-row gap-3 overflow-hidden`}
                  >
                    <img
                      src={donated_campaign.image}
                      alt=""
                      className="w-full lg:w-52"
                    />
                    <div className={`card p-2 space-y-2 py-4 w-full`}>
                      <span
                        className={`bg-[${donated_campaign.category_bg}] px-2 rounded font-normal w-min text-[${donated_campaign.text_color}]`}
                      >
                        {donated_campaign.category}
                      </span>
                      <h1
                        className={`text-[${donated_campaign.text_color}] text-xl`}
                      >
                        {donated_campaign.title}
                      </h1>
                      <p className={`text-[${donated_campaign.text_color}]`}>
                        ${donated_campaign.donation_amount}.00
                      </p>
                      <Link
                        to={`campaign/${donated_campaign.id}`}
                        className={`bg-[${donated_campaign.text_color}] text-white w-max py-1 px-2 rounded-lg lg:mx-0 mx-auto font-normal`}
                      >
                        <button>View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showAll && (
              <div
                onClick={() => handleShowAll()}
                className="see-btn bg-[#FF444A] text-white font-bold mb-10 w-max px-8 py-2 rounded-lg mx-auto"
              >
                <button>Show All</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
