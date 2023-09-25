import { getData } from "./getData";

export const getTotalDonationNeed = async () => {
  const data = await getData();
  const total = data.reduce((accumulator, item) => {
    return accumulator + parseInt(item.donation_amount);
  }, 0);

  return total;
};
