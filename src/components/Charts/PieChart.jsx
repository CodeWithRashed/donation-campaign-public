import { useEffect, useState } from "react";
import { getTotalDonationNeed } from "../../hook/getTotalDonationNeed.js";
import { getDonatedAmount } from "../../hook/getDonatedAmount";
import { Chart } from "react-google-charts";

const PieChart = () => {
  const [donatedAmount, setDonatedAmount] = useState();
  const [donationNeed, setDonationNeed] = useState();

  useEffect(() => {
    getTotalDonationNeed().then((result) => {
      setDonationNeed(result);
    });

    getDonatedAmount().then((result1) => {
      setDonatedAmount(result1);
    });
  }, [donatedAmount]);

  const data = [
    ["Donation", "Donation Camping"],
    ["Donation Need", donationNeed],
    ["Your Donation", donatedAmount],
  ];

  const options = {
    legend: { position: "bottom", textStyle: { color: "black", fontSize: 16}, shape: 'square'},
    colors: ["#00C49F", "#FF444A"],
    sliceVisibilityThreshold: 0,
    fontSize: 18,
    pieStartAngle: 50,
    tooltip: {ignoreBounds: true}
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        options={options}
        height="400px"
      />
    </div>
  );
};

export default PieChart;
