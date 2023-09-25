import { Chart as ChartJS, ArcElement, Legend, Tooltip} from "chart.js";
import 'chartjs-plugin-datalabels';
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from "react";
import { getTotalDonationNeed } from "../../hook/getTotalDonationNeed.js";
import { getDonatedAmount } from "../../hook/getDonatedAmount";

ChartJS.register(ArcElement, Legend, ChartDataLabels, Tooltip);

const PieChart = () => {
  const [donatedAmountParcent, setDonatedAmountParcent] = useState()
  const [donationNeedParcent, setDonationNeedParcent] = useState()


  useEffect(() => {
    let donatedAmount;
    let donationNeed;
    getTotalDonationNeed()
    .then((result) => {
      donationNeed = result
      setDonationNeedParcent((100 - donatedAmountParcent).toFixed(2))
    })

    getDonatedAmount()
    .then((result1) => {
      donatedAmount = result1
      setDonatedAmountParcent(((donatedAmount / donationNeed) * 100).toFixed(2))


    })
  }, [donatedAmountParcent])


  const data = {
    labels: ['Your Donation', 'Total Donation'],
    datasets: [
      {
        label: 'Donation Dataset',
        
        data: [donatedAmountParcent, donationNeedParcent],
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
    <div>
      <Pie data={data} options={chartOptions} width={250} height={350} />
    </div>
  );
};

export default PieChart;
