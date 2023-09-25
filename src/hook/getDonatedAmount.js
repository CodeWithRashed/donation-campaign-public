import { getData } from "./getData";

export const getDonatedAmount = async () => {
    const data = await getData();
   
    let localItems = JSON.parse(localStorage.getItem("id")) || [];
   
    const filteredData = data.filter((singleData) => localItems.includes(singleData.id));
    const total = filteredData.reduce((accumulator, item) => {
        return accumulator + parseInt(item.donation_amount);
      }, 0);
    
      return total;

};
