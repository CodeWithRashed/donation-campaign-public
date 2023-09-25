import { Chart as ChartJS, ArcElement, Legend, Tooltip} from "chart.js";
import 'chartjs-plugin-datalabels';
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from "react";
import { getTotalDonationNeed } from "../../hook/getTotalDonationNeed.js";
import { getDonatedAmount } from "../../hook/getDonatedAmount";

ChartJS.register(ArcElement, Legend, ChartDataLabels, Tooltip);

const PieChart = () => {
  const [donatedAmountPercent, setDonatedAmountPercent] = useState()
  const [donationNeedPercent, setDonationNeedPercent] = useState()


  useEffect(() => {
    let donatedAmount;
    let donationNeed;
    getTotalDonationNeed()
    .then((result) => {
      donationNeed = result
      setDonationNeedPercent((100 - donatedAmountPercent).toFixed(2))
    })

    getDonatedAmount()
    .then((result1) => {
      donatedAmount = result1
      setDonatedAmountPercent(((donatedAmount / donationNeed) * 100).toFixed(2))


    })
  }, [donatedAmountPercent])


  const data = {
    labels: ['Your Donation', 'Total Donation'],
    datasets: [
      {
        label: 'Donation Dataset',
        
        data: [donatedAmountPercent, donationNeedPercent],
        backgroundColor: ['#FF444A', '#00C49F'],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 25, // Increase the font size here
          weight: 'bold'
        },
      },
    },
    
    
  };

  return (
    <div >
      <Pie data={data} options={chartOptions} width={250} height={350} />
    </div>
  );
};

export default PieChart;
