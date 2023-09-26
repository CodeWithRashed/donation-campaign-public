import { useEffect, useState } from "react";
import { getData } from "../hook/getData";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if (localItems.includes(parseInt(id.id))) {
      return toast.error('Already Donated!!!', {
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
    if (!localItems) {
      donatedCampaignArray.push(parseInt(id.id));
      localStorage.setItem("id", JSON.stringify(donatedCampaignArray));
      toast.success('Donation Successful!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    } else {
      donatedCampaignArray.push(...localItems, parseInt(id.id));
      localStorage.setItem("id", JSON.stringify(donatedCampaignArray));
      toast.success('Donation Successful!', {
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

  const filteredData = data.filter((singleData) => singleData.id == id.id);

  return (
    <div className="py-12">
        <ToastContainer />
      {filteredData.map((singleCampaign) => (
        <div className="campaign-container" key={singleCampaign.id}>
          <div className="image-container relative">
            <img
              src={singleCampaign.image}
              alt="campaign-image"
              className="w-full h-[70vh] object-cover object-center rounded-lg"
            />
            <div className="donate-cta p-4 absolute bottom-0 w-full bg-gradient-to-r from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.7)]">
              <button
                className={`bg-[${singleCampaign.text_color}] text-white p-3 rounded-lg font-bold`}
                onClick={handleDonate}
              >
                Donate {singleCampaign.donation_amount}.00$
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

export default CampaignPage;
