export let getData = async () => {
      let res = await fetch("../data.json");
      let data = await res.json();
      return(data);
  };