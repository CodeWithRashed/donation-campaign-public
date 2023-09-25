const Banner = () => {
  return (
    <div className="h-[60vh] flex justify-center items-center ">
      
      <div className="content flex flex-col justify-center items-center gap-14">
      <h1 className="text-3xl lg:text-5xl text-center">I Grow By Helping People In Need</h1>
      <div className="search">
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item focus:outline-none"
              placeholder="Search Here.."
            />
          </div>

          <div className="indicator">
            <button className="btn join-item bg-[#FF444A] text-white font-Inter font-bold capitalize">
              Search
            </button>
          </div>
        </div>
      </div>
      </div>
      
     
    </div>
  );
};

export default Banner;
